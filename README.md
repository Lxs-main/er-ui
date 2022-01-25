- 完整引入(在main.js中)
  import Rdilemma from 'rdilemma-ui'
  import 'rdilemma-ui/dist/rdilemma-ui.css'
  Vue.use(Rdilemma)

  

  

  

  ## 选人组件    check-person

  - 属性

    |  属性名称  |  类型   |     说明     |
    | :--------: | :-----: | :----------: |
    | isCheckOne | boolean |   是否单选   |
    |  rootDept  | String  | 部门根级名称 |
    |  deptList  |  array  |   部门数组   |
    |  empList   |  array  |   人员数组   |

    ```json
    deptList: [{
              id: 40,
              name: "研发一部",
              parentId: 37,
              seq: 2,
            }]
    empList: [{
              ID: 1,
              EmployeeName: "吴亦凡",
              DepartId: 44,
            }]
    ```

    

  - 函数 

    | 函数名称 | 参数  |        说明        |
    | :------: | :---: | :----------------: |
    | saveData | array | 回调参数为所选人员 |

    