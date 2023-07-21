let taskli = [];
const butlist = [];
let ord=0;

function editStatus(taskid){
    const val = document.getElementById(taskid);
    //console.log(val);

    if (val.innerText === 'Todo'){
        val.innerHTML = 'In Progress';
        val.setAttribute("class", "inprogress");
    }else{
        val.innerHTML = 'Complete';
        val.setAttribute("class", "complete");
    }
}

function removeTask(taskid){
    document.getElementById(taskid).remove();
}

function editTask(taskid, cont, content, ed){
    
    butlist.forEach(bt => {
        //if (bt !== ed){
            //if (document.getElementById(bt) != null)


            document.getElementById(bt.ed).setAttribute("class", "editbox fa fa-edit");
            
            
            /*console.log(bt);
            console.log(document.getElementById(bt));*/
        //}
    });

    document.getElementById(ed).setAttribute("class", "boxinedit fa fa-edit");

    document.getElementById("unique").focus();
    document.getElementById("unique").value = content;

    const addtask = document.getElementById("AddTaskbutton");
    const edittask = document.getElementById("CfEditButton");

    addtask.style.display = "none";
    edittask.style.display="block";

    
    edittask.onclick = function() {
        document.getElementById(cont).innerHTML = document.getElementById("unique").value;
        document.getElementById(ed).setAttribute("class", "editbox fa fa-edit");
        
        addtask.style.display = "block";
        edittask.style.display = "none";
        return;
    }
    
}




function addTasktoArray(){
    
    const ntask=document.getElementById("unique").value;
    ord++;
    taskli.push({ntask, ord});

    //console.log(taskli);
    
    taskli.forEach(tasknode => {
        const taskList = document.getElementById("TaskList");

        const newTask = document.createElement("div");
        newTask.setAttribute("class", "row");
        let taskid = 'no'+tasknode.ord.toString();
        newTask.setAttribute("id", taskid);



        const nametask = document.createElement("p");
        nametask.innerHTML = tasknode.ntask;
        nametask.setAttribute("class", "taskname");
        let cont = 'contno' + tasknode.ord.toString();
        nametask.setAttribute("id", cont);
            const nametaskbox = document.createElement("div");
            nametaskbox.appendChild(nametask);
        newTask.appendChild(nametaskbox);



        const newstatus = document.createElement("button");
        newstatus.setAttribute("class", "todo");
        let st='sttno'+tasknode.ord.toString();
        newstatus.setAttribute("id", st);
        newstatus.innerHTML = 'Todo';
        
        

        //newTask.appendChild(newstatus);
            const newstatusbox = document.createElement("div");
            newstatusbox.setAttribute("class", "sttbox");
            newstatusbox.appendChild(newstatus);
            
        newTask.appendChild(newstatusbox);




        const newedit = document.createElement("button");
        newedit.setAttribute("class", "editbox fa fa-edit");
        
        let ed="edno"+tasknode.ord.toString();
        newedit.setAttribute("id", ed);
        butlist.push({ed});

            const neweditbox = document.createElement("div");
            neweditbox.setAttribute("class", "edbox");
            neweditbox.appendChild(newedit);
        newTask.appendChild(neweditbox);

        


        const newtrash = document.createElement("button");
        newtrash.setAttribute("class", "fa fa-trash trashbin");
        let del='delno'+tasknode.ord.toString();
        newtrash.setAttribute("id", del);
        //newTask.appendChild(newtrash);
            const newtrashbox = document.createElement("div");
            newtrashbox.setAttribute("class", "edbox");
            newtrashbox.appendChild(newtrash);
        newTask.appendChild(newtrashbox);

        taskList.appendChild(newTask);

        document.getElementById(st).onclick = function() {editStatus(st)};
        document.getElementById(del).onclick = function() {
            removeTask(taskid)
            //butlist.getElementById(ed).remove();
        };

        
        document.getElementById(ed).onclick = function(event) {
            event.preventDefault();
            editTask(taskid, cont, nametask.innerHTML, ed);  
            //document.getElementById('edno1').setAttribute("class", "editbox fa fa-edit");
            butlist.forEach(bt => {
                //if (bt !== ed){
                    //if (document.getElementById(bt) != null)
        
                    console.log(document.getElementById(bt));
        
                    //document.getElementById(bt).setAttribute("class", "editbox fa fa-edit");
                    
                    
                    /*console.log(bt);
                    console.log(document.getElementById(bt));*/
                //}
            });
            return;
        };
        
        
        

        

        
        /*console.log(taskid);
        console.log(cont);
        console.log(st);
        console.log(del);
        console.log(ed);*/
        
        
        taskli.shift();

    });
    //console.log(taskli);

}