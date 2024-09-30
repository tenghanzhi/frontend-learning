### 远程分支
### 远程跟踪分支
### 本地分支
    正常的数据推送 和 拉取步骤
        1. 确保本地分支已经跟踪了远程跟踪分支
        2. 拉取数据 : git pull
        3. 上传数据: git push
        
    一个本地分支怎么去跟踪一个远程跟踪分支
        1. 当克隆的时候 会自动生成一个master本地分支(已经跟踪了对应的远程跟踪分支)
        2. 在新建其他分支时 可以指定想要跟踪的远程跟踪分支
                git checkout -b 本地分支名 远程跟踪分支名
                git checkout --track  远程跟踪分支名 
        3. 将一个已经存在的本地分支 改成 一个跟踪分支   
                git branch -u 远程跟踪分支名     
    

### 团队协作
    1. 项目经理初始化远程仓库
        一定要初始化一个空的仓库; 在github上操作
    2. 项目经理创建本地仓库
        git remote 别名 仓库地址(https)
        git init ; 将源码复制进来
        修改用户名 修改邮箱
        git add
        git commit 
    3. 项目经理推送本地仓库到远程仓库
        清理windows凭据
        git push  别名 分支  (输入用户名 密码;推完之后会附带生成远程跟踪分支)
     4. 项目邀请成员 & 成员接受邀请
          在github上操作  
    
    5. 成员克隆远程仓库
        git clone  仓库地址 (在本地生成.git文件 默认为远程仓库配了别名 orgin)
                    只有在克隆的时候 本地分支master 和 远程跟踪分支别名/master 是有同步关系的
    6. 成员做出贡献
        修改源码文件
        git add 
        git commit 
        git push  别名 分支 (输入用户名 密码;推完之后会附带生成远程跟踪分支) 
        
    7. 项目经理更新修改
        git fetch 别名 (将修改同步到远程跟踪分支上)
        git merge 远程跟踪分支
        
### 冲突
    git本地操作会不会有冲突?
        典型合并的时候
    git远程协作的时候 会不会有冲突?
        push
        pull            
        
        
               
        
    
            