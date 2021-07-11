(function(){
    var Node=require("./Node.js")
    var list=function(){
        size = 0;
        this.head=null;
        return {
            append: function(value){
                var newNode=new Node(value);
                if(this.head ==null || size==0){
                    this.head=newNode;
                }
                else{
                    var temp=this.head;
                    while(temp.next){
                        temp=temp.next;
                    }
                    temp.next=newNode;
                }
                size+=1;
            },
            len: function(){
                return size;
            },
            map:function(fun){
                var temp=this.head;
                while(temp.next){
                    fun.call(this,temp.value);
                    temp=temp.next;
                }
            },

            exists: function(data){
                if(!data) return false;
                var temp= this.head;
                while(temp.next){
                    if(temp.value==data){
                        return true;
                    }
                    temp=temp.next;
                }
                return false;
            },

            toArray: function(){
                var arr=[];
                var node=this.head;
                while(node.next){
                    arr.push(node.value);
                    node=node.next;
                }
                return arr;
            }
        }
    }();
    module.exports = list;
}());