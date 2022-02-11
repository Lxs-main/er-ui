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
  props: ["emp", "allemp", "lvl"],
  filters: {
    level: function (le) {
      return "lvl" + le;
    },
  },
  methods: {
    selectEmp(emp) {
      if (typeof emp.checked == "undefined") {
        this.$set(emp, "checked", true);
      } else {
        emp.checked = !emp.checked;
      }
    },
  },
};
</script>
<style lang="css" scoped src="./css/shared.min.css"/>
