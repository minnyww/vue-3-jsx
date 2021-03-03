// import { defineComponent } from '@vue/composition-api';

import { defineComponent, reactive, ref } from "vue";

const Test = defineComponent({
   setup() {
      const count = ref(0);
      const userList = reactive([{ name: "min" }, { name: "myy" }]);

      return {
         count,
         userList,
      };
   },

   methods: {
      increment() {
         console.log(this.count);
         this.count++;
      },
   },

   render() {
      return (
         <div>
            <h2>Counter Test jaaa</h2>
            <button onClick={this.increment}>Increment</button>
            <span>Count: {this.count}</span>
            {JSON.stringify(this.userList)}
         </div>
      );
   },
});

export default Test;
