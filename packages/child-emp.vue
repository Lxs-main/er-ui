<template>
  <li v-on:click.stop="selectEmp(emp)">
    <a class="member-item" v-bind:class="lvl | level" href="javascript:;">
      <div class="lc-avatar flex-se1" name="true" size="30">
        <div class="lc-avatar-30" title="emp.EmployeeName">
          <span
            class="lc-avatar-def"
            style="background-color: rgb(112, 118, 142)">
            <div>{{ emp.EmployeeName }}</div>
          </span>
          <div class="lc-avatar-name">{{ emp.EmployeeName }}</div>
        </div>
      </div>
      <i v-bind:class="{ 'one-icon-select': emp.checked }"></i>
    </a>
  </li>
</template>
<script>
export default {
  props: ["emp", "allemp", "lvl", "isCheckOne"],
  filters: {
    level: function (le) {
      return "lvl" + le;
    },
  },
  methods: {
    selectEmp(emp) {
      if (typeof emp.checked == "undefined") {
        if (! (this.isCheckOne && this.getCheckedEmp().length >= 1)) {
          this.$set(emp, "checked", true);
        } else{
          this.$message.error('当前只能选择一个人员!');
        }
      } else {
        if (!emp.checked){
          if (! (this.isCheckOne && this.getCheckedEmp().length >= 1)) {
            emp.checked = !emp.checked;
          } else{
            this.$message.error('当前只能选择一个人员!');
          }
        }else{
          emp.checked = !emp.checked;
        }
      }
    },
    getCheckedEmp() {
      return this.allemp.filter(function (item) {
        return item.checked === true;
      });
    },
  },
};
</script>
<style lang="css" scoped src="./css/shared.min.css"/>
