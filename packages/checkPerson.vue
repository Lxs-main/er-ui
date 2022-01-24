<template>
  <div id="DeptSelEmp">
    <div class="select-member-area">
      <div class="row select-member-panel">
        <div class="member-all">
          <div class="member-panel-header">
            <ul class="modal-tab">
              <li v-bind:class="{ active: showType == 1 }" v-on:click="changeSelType(1)">
                <a href="javascript:;">快速检索</a>
              </li>
              <li class="divider"></li>
              <li v-bind:class="{ active: showType == 2 }" v-on:click="changeSelType(2)">
                <a href="javascript:;">部门</a>
              </li>
            </ul>
          </div>
          <div class="member-panel-body">
            <div v-show="showType == 1">
              <div class="search-container">
                <div class="search-area-modal">
                  <i class="fa fa-search one-icon-search"></i>
                  <input type="text" placeholder="搜索成员..." v-model="searchKey"/>
                </div>
                <a href="javascript:;" class="btn-action" v-on:click.self="selectAll()">添加全部</a>
              </div>
              <ul>
                <li class="group-title" v-if="empList.length > getCheckedEmp().length &&searchEmp.length > 0">
                  全部联系人
                </li>
                <template v-for="(emp, index) in searchEmp">
                  <li :key="index + 'emp'" v-if="!emp.checked" v-on:click="selectEmp(emp)" class="member">
                    <div class="lc-avatar" member="member" name="true" size="30">
                      <div class="lc-avatar-30" title="emp.EmployeeName">
                        <span class="lc-avatar-def" style="background-color: rgb(75, 149, 183)">
                          <div>{{ emp.EmployeeName }}</div>
                        </span>
                        <div class="lc-avatar-name">
                          {{ emp.EmployeeName }}
                        </div>
                      </div>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
            <div class="department-list lc-tree" v-show="showType == 2">
              <ul class="lc-tree">
                <li>
                  <a class="lvl0" v-on:click="rootNodeExpand = !rootNodeExpand" v-on:dblclick="rootNodeExpand = !rootNodeExpand">
                    <span class="expand-tree-icon">
                      <i class="fa fa-caret-right one-icon-caret-right" v-bind:class="{ active: rootNodeExpand }"></i>
                    </span>
                    <span>
                      <i class="lcfont lc-department-o one-icon-company"></i>
                    </span>
                    <span class="title">
                      <span>{{rootDept}}</span>
                      <span class="title-desc">( {{ empList.length }}人 )</span>
                      <i class="lcfont lc-add one-icon-add" title="添加整个部门成员" v-on:click.stop="selectAll()"></i>
                    </span>
                  </a>
                  <ul v-show="rootNodeExpand">
                    <ChildEmp
                      v-for="(emp, index) in getChildEmp(0)"
                      :key="index + 'emp'"
                      v-bind:emp="emp"
                      v-bind:allemp="empList"
                      v-bind:lvl="1"
                    />
                    <ChildDept
                      v-for="(dept, index) in getChildDept(0)"
                      :key="index + 'dept'"
                      v-bind:dept="dept"
                      v-bind:allemp="empList"
                      v-bind:alldept="deptList"
                      v-bind:lvl="1"
                    />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="member-arrow"><i class="fa fa-angle-right one-icon-arrow-right"></i></div>
        <div class="member-selected">
          <div class="member-panel-header">
            <span>已选择成员</span>
            <span class="header-meta">({{ getCheckedEmp().length }})</span>
          </div>
          <div class="member-panel-body">
            <div>
              <ul>
                <template v-for="(emp, index) in empList">
                  <li :key="index + 'emp'" v-if="emp.checked" class="member">
                    <div class="lc-avatar" member="member" size="30" name="true">
                      <div class="lc-avatar-30" title="emp.EmployeeName">
                        <span class="lc-avatar-def" style="background-color: rgb(75, 149, 183)">
                          <div>{{ emp.EmployeeName }}</div>
                        </span>
                        <div class="lc-avatar-name">
                          {{ emp.EmployeeName }}
                        </div>
                      </div>
                    </div>
                    <span href="javascript:;" class="btn-link-remove">
                      <i v-on:click="selectEmp(emp)" class="lcfont lc-close one-icon-close"></i>
                    </span>
                  </li>
                </template>
<!--                <template v-if="isCheckOne && getCheckedEmp().length >= 2">
                  <li style="margin-top: 10px">
                    <div class="error-check">当前只能选择一个人员!</div>
                  </li>
                </template>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="member-action">
        <button class="btn btn-primary" v-on:click="saveData()">保存</button>
        <button class="btn btn-link" id="cancelSelEmp">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
import ChildDept from "./child-dept";
import ChildEmp from "./child-emp";
export default {
  name: 'CheckPerson',
  components: {
    ChildDept,
    ChildEmp,
  },
  props: {
    deptList: {
      type: Array,
      default: () => [],
    },
    empList: {
      type: Array,
      default: () => [],
    },
    rootDept: {
      //数据类型
      type: String,
      default: ''
    },
    isCheckOne: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      showType: 1,
      rootNodeExpand: true,
      searchKey: "",
    };
  },
  computed: {
    searchEmp: function () {
      var self = this;
      if (this.searchKey.trim() == "") {
        return self.empList;
      } else {
        return this.empList.filter(function (item) {
          return item.EmployeeName.indexOf(self.searchKey.trim()) !== -1;
        });
      }
    },
  },

  methods: {
    changeSelType(selType) {
      this.showType = selType;
    },
    selectEmp(emp) {
      if (typeof emp.checked == "undefined") {
        if (! (this.isCheckOne && this.getCheckedEmp().length >= 1)) {
          this.$set(emp, "checked", true);
        }else{
          this.$message.error('当前只能选择一个人员!');
        }
      } else {
        emp.checked = !emp.checked;
      }

    },
    selectAll() {
      var _this = this;
      this.empList.forEach(function (item, index) {
        if (typeof item.checked == "undefined" || !item.checked) {
          _this.$set(item, "checked", true);
        }
      });
    },
    getChildDept(pid) {
      return this.deptList.filter(function (item) {
        return item.parentId == pid;
      });
    },
    getChildEmp(deptId) {
      return this.empList.filter(function (item) {
        return item.DepartId == deptId;
      });
    },
    getCheckedEmp() {
      return this.empList.filter(function (item) {
        return item.checked == true;
      });
    },
    saveData() {
      var selectedEmpIds = [];
      var arr = [];
      this.empList.forEach(function (item, index) {
        if (item.checked) {
          selectedEmpIds.push(item.ID);
          arr.push(item);
        }
      });
      this.$emit('saveData',arr)
    },
  },
};
</script>
<style>
@import "./css/shared.min.css";
.error-check{
  text-align: center;
  color: #FFFFFF;
  background: #F56C6C;
  height: 28px;
  line-height: 28px;
  width: 182px;
  margin: 0 auto;
  border-radius: 6px;
}
</style>
