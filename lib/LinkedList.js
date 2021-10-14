(function () {
  var Node = require("./Node.js");
  var list = (function () {
    size = 0;
    this.head = null;
    return {
      append: function (value) {
        var newNode = new Node(value);
        if (this.head == null || size == 0) {
          this.head = newNode;
        } else {
          var temp = this.head;
          while (temp.next) {
            temp = temp.next;
          }
          temp.next = newNode;
        }
        size += 1;
      },
      len: function () {
        return size;
      },
      map: function (fun) {
        var temp = this.head;
        while (temp.next) {
          fun.call(this, temp.value);
          temp = temp.next;
        }
      },
      exists: function (data) {
        if (!data) return false;
        var temp = this.head;
        while (1) {
          if (temp.value == data) {
            return true;
          }
          temp = temp.next;
          if (temp.next == null) {
            if (temp.value == data) {
              return true;
            }
            break;
          }
        }
        return false;
      },

      toArray: function () {
        var arr = [];
        var node = this.head;
        while (1) {
          arr.push(node.value);
          node = node.next;
          if (node.next == null) {
            arr.push(node.value);
            break;
          }
        }
        return arr;
      },

      display: function () {
        var node = this.head;
        while (1) {
          console.log(node.value);
          node = node.next;
          if (node.next == null) {
            console.log(node.value);
            break;
          }
        }
      },
      addFirst: function (value) {
        var newNode = new Node(value);
        if (this.head == null || size == 0) {
          this.head = newNode;
        } else {
          let temp = this.head;
          this.head = newNode;
          this.head.next = temp;
        }
        size += 1;
      },
      cycleDetection: function () {
        var slow = this.head;
        var fast = this.head;
        while (1) {
          if (fast.next == null) {
            return false;
          }
          if (fast.next.next == null) {
            return false;
          }
          slow = slow.next;
          fast = fast.next.next;
          if (slow == fast) {
            return true;
          }
        }
      },
      addLast: function (value) {
        var newNode = new Node(value);
        if (this.head == null || size == 0) {
          this.head = newNode;
        } else {
          var temp = this.head;
          while (temp.next) {
            temp = temp.next;
          }
          temp.next = newNode;
        }
        size += 1;
      },
    };
  })();
  module.exports = list;
})();
