<template>
  <li v-on:click.stop="expandTree()">
    <a v-bind:class="lvl | level">
      <span class="expand-tree-icon">
        <i class="one-icon-caret-right" style="display: inline-block;margin-top: 5px;font-size: 16px"
           v-bind:class="{ active: dept.rootNodeExpand }"></i></span>
      <span>
        <i class="one-icon-company" style="margin-top: 5px;display: inline-block;font-size: 20px;"></i>
      </span>
      <span class="title">
        <span>{{ dept.name }}</span>
        <span class="title-desc">({{ getAllChildEmp(dept.id).length }}人 )</span>
        <i class="one-add one-icon-add" v-on:click.stop="selectDeptEmp(dept.id)" title="添加整个部门成员"></i>
      </span>
    </a>
    <ul v-show="dept.rootNodeExpand">
      <ChildEmp
          v-for="(emp,index) in getChildEmp(dept.id)" :key="index+'emp'"
          v-bind:emp="emp"
          v-bind:allemp="allemp"
          v-bind:lvl="lvl + 1"/>
      <child-dept
          v-for="(dept,index) in getChildDept(dept.id)"
          :key="index+'dept'"
          v-bind:dept="dept"
          v-bind:allemp="allemp"
          v-bind:alldept="alldept"
          v-bind:lvl="lvl + 1"/>
    </ul>
  </li>
</template>
<script>
import ChildEmp from "./child-emp"

export default {
  name: "child-dept",
  props: ["dept", "allemp", "alldept", "lvl"],
  components: {ChildEmp},
  filters: {
    level: function (le) {
      return "lvl" + le;
    },
  },
  methods: {
    selectDeptEmp(deptId) {
      var _this = this;
      _this.allemp.forEach(function (item, index) {
        if (item.DepartId == deptId) {
          if (typeof item.checked == "undefined") {
            _this.$set(item, "checked", true);
          } else {
            item.checked = !item.checked;
          }
        }
      });
    },
    getChildEmp(deptId) {
      return this.allemp.filter(function (item) {
        return item.DepartId == deptId;
      });
    },
    getAllChildEmp(deptId) {
      var deptIds = [];
      if (deptId != 0) {
        deptIds.push(deptId);
      }
      this.alldept.forEach(function (item, index) {
        if (item.parentId == deptId) {
          deptIds.push(item.id);
        }
      });
      var allempids = [];
      this.allemp.forEach(function (item) {
        deptIds.forEach(function (d) {
          if (d == item.DepartId) {
            allempids.push(item.ID);
          }
        });
      });
      return allempids;
    },
    getChildDept(pid) {
      return this.alldept.filter(function (item) {
        return item.parentId == pid;
      });
    },
    expandTree() {
      if (typeof this.dept.rootNodeExpand == "undefined") {
        this.$set(this.dept, "rootNodeExpand", true);
      } else {
        this.dept.rootNodeExpand = !this.dept.rootNodeExpand;
      }
    },
  },
};
</script>
<style scoped>
li a i.one-add {
  display: none;
  font-size: 12px;
}

li a:hover i.one-add {
  display: inline-block;
}
</style>
<style scoped src="./css/shared.min.css"/>
