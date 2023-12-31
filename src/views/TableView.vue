<script lang="ts">
import CasTable from '@/components/CasTable.vue';
import MyLogo from '@/components/MyLogo.vue';

export default {
  name: 'TableView',
  components: {
    CasTable,
    MyLogo
  },
  data() {
    return {
      count: 1,
      printing: false
    };
  },
  mounted() {
    let count = this.$route.params.count;
    if (Array.isArray(count)) {
      count = count[0];
    }
    if (
      !count ||
      isNaN(parseInt(count)) ||
      parseInt(count) < 1 ||
      parseInt(count) > 6
    ) {
      this.$router.push({ name: 'home' });
    } else {
      this.count = parseInt(count);
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    saveAsExcel() {
      const table = document.querySelector('table');
      if (!table) {
        return;
      }
      const tableHtml = table.outerHTML;
      const style =
        '<style>table{border-collapse: collapse;}td,th{border: 1px solid #000;padding: 5px;}</style>';
      const html = `${style}${tableHtml}`;
      const url = `data:application/vnd.ms-excel;base64,${btoa(html)}`;
      const a = document.createElement('a');
      a.href = url;
      a.download = 'table.xls';
      a.click();
    },
    saveAsPDF() {
      this.printing = true;

      const elOff = document.getElementsByClassName('print-off');
      const displayBefore: any[] = [];
      Array.prototype.forEach.call(elOff, function (el: any) {
        displayBefore.push(el.style.display);
        el.style.display = 'none';
      });

      const elOn = document.getElementsByClassName('print-only');
      Array.prototype.forEach.call(elOn, function (el: any) {
        el.style.display = 'block';
      });

      setTimeout(() => {
        // get the html
        const html = document.documentElement.outerHTML;
        // create a new window
        const win = window.open('', 'printwindow');
        if (!win) {
          alert('Please allow popups for this website');
          return;
        }
        // write the html to the window
        win.document.write(html);
        // print the window
        win.print();

        // close the window
        win.close();
        setTimeout(() => {
          this.printing = false;
          Array.prototype.forEach.call(elOff, function (el: any, i: number) {
            el.style.display = displayBefore[i];
          });
          Array.prototype.forEach.call(elOn, function (el: any) {
            el.style.display = 'none';
          });
        }, 500);
      }, 500);
    },
    getDate() {
      const date = new Date();
      const day = date.getDate();
      // get month as string
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${day}. ${month} ${year}`;
    }
  }
};
</script>

<template>
  <div>
    <h1 v-if="!printing">{{ count }} Player</h1>
    <MyLogo v-if="printing" color="black" :big="true"></MyLogo>
    <h1 v-if="printing">{{ getDate() }}</h1>
    <div class="container">
      <CasTable :count="count" />
      <h2 v-if="printing" class="url">cascoria.philipp-bonin.com</h2>
      <div class="btn-container" v-if="!printing">
        <button class="btn" @click="saveAsPDF()">Save as PDF</button>
        <button class="btn" @click="saveAsExcel()">Save as Excel</button>
        <button class="btn home-btn" @click="goToHome()">Home</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/variables';

.container,
.btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .home-btn {
    margin-bottom: 50px;
  }
}
.url {
  margin-top: 100px;
}
</style>
