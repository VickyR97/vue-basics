<template>
  <div>
    <Header />

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Menu />
        </div>

        <div class="col-9">
          <h4 class="font-weight-bold pt-2 ml-2" v-text="Heading"></h4>

          <!-- v-text -->
          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
              <h5 class="mt-3 font-weight-bold">v-text</h5>
              <p class="pl-5">
                v-text is used to update a element’s
                <b>textContent</b> with our data.
              </p>
              <p class="mb-2" v-html="syntax"></p>
              <div
                style="min-width: 150px; height:40px; line-height:40px;"
                class="bg-dark text-center text-white ml-5 w-25 rounded"
              >
                <p class>
                  <b>v-text = "data"</b>
                </p>
              </div>
              <p class="mt-5 mb-2" v-html="eg"></p>
              <p class="pl-5" v-text="v_text_example"></p>
              <p>
                <small class="mt-2" v-html="Reference"></small>
              </p>
            </div>
          </div>

          <!-- v-html -->
          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
              <h5 class="mt-3 font-weight-bold">v-html</h5>
              <p class="pl-5">
                v-html is used to update a element’s
                <b>innerHTML</b> with our data. v-html directive to this element with data as a message.
              </p>
              <p class="mb-2" v-html="syntax"></p>
              <div
               style="min-width: 200px; height:40px; line-height:40px;"
                class="bg-dark text-center text-white ml-5 w-25 rounded"
              >
                <p class>
                  <b>v-html = "data"</b>
                </p>
              </div>
              <p class="mt-5 mb-2" v-html="eg"></p>
              <p class="pl-5" v-text="v_html_example"></p>
              <p>
                <small class="mt-2" v-html="Reference"></small>
              </p>
            </div>
          </div>

          <!-- v-bind -->
          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
              <h5 class="mt-3 font-weight-bold">v-bind</h5>
              <p class="pl-5">
                v-bind is used to bind one or more attributes, or a component prop to an element. We can bind two or more
                <b>(Classes, styles, and attributes)</b>
              </p>
              <p class="mb-2" v-html="syntax"></p>
              <div
                style="min-width: 200px; height:40px; line-height:40px;"
                class="bg-dark text-center text-white ml-5 w-25 rounded"
              >
                <p class>
                  <b>v-bind:attribute = "expression";</b>
                </p>
              </div>
              <p class="mt-5 mb-2" v-html="eg"></p>
              <p class="pl-5" v-text="v_bind_example"></p>
              <p>
                <small class="mt-2" v-html="Reference"></small>
              </p>
            </div>
          </div>

            

          <!-- Conditional Rendering directives -->
          <h4 class="font-weight-bold pt-2 ml-2" v-text="Heading1"></h4>

          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
              <p class="pl-5 mt-3">
                <b>Conditional rendering</b> as a term describes the ability to render different UI markup based on certain conditions.
              </p>
              <p>These are the directives:</p>
              <ul>
                <li
                  class="ml-5"
                  v-for="directives in conditional_render_directives"
                  :key="directives"
                >{{directives}}</li>
              </ul>
              <p>
                <b>Important:</b>
                The main difference between the two is that,
                <b>v-if</b> - Only renders the element to the DOM if the expression passes.
                <b>v-show</b> - Renders all elements to the DOM and then uses the CSS display property to hide elements if the expression fails.
                <b>v-show</b> - Does not support
                <b>v-else, v-else-if</b>.
              </p>
              <p>
                <b>v-if</b> is suitable for when several element depends on single conditon
                <b>(unlikely during runtime)</b>
              </p>
              <p>
                <b>v-show</b> is suitable for when changes appear during runtime
                <b>(during runtime)</b>
              </p>
              <p>
                <small class="mt-2" v-html="Reference"></small>
              </p>
            </div>
          </div>

          <!-- v-for -->
          <h4 class="font-weight-bold pt-2 ml-2" v-text="Heading2"></h4>
          <div class="row border border-dark rounded mb-5 mr-2 ml-2">
            <div class="col-12">
              <h5 class="mt-3 font-weight-bold">v-for</h5>
              <p class="pl-5">v-bind is used to list of items based on an array</p>
              <p class="mb-2" v-html="syntax"></p>
              <div
                style="min-width: 150px; height:40px; line-height:40px;"
                class="bg-dark text-center text-white ml-5 w-25 rounded"
              >
                <p class>
                  <b>v-for = "item in items";</b>
                </p>
              </div>
              <p class="mt-5 mb-2" v-html="eg"></p>
              <p class="pl-5" v-text="v_for_example"></p>
              <p>v-for can list the items based on:</p>
              <ul>
                <li class="ml-5" v-for="element in v_for_based_on" :key="element">{{element}}</li>
              </ul>
              <p>
                <small class="mt-2" v-html="Reference"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Menu from "./Horizontal-menu";

export default {
  components: {
    Header,
    Menu
  },
  data() {
    return {
      // Directives Variables
      Heading: "Vue Directives",
      v_text_example: '<h4 v-text="Heading"></h4> Heading: "heading content"',
      eg: "<b> Example Code: </b>",
      syntax: "<b> Syntax: </b>",
      Reference:
        'For your reference follow this youtube channel <a target="_blank" href="https://www.youtube.com/watch?v=EUPYYBXjIts&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&index=5"> Code Evolution </a>',
      v_html_example: '<p class="mt-5 mb-2" v-html="eg"></p>',
      v_bind_example:
        '<p v-bind:class = "{active: ifActive, error: !ifActive}" class="mt-5 mb-2" v-html="eg"></p>',

      // Conditional rendering
      Heading1: "Conditional Rendering",
      conditional_render_directives: ["v-if", "v-else", "v-else-if", "v-show"],

      // list rendering
      Heading2: "List Rendering",
      v_for_example: '<li v-for = "item in items"></li>',
      v_for_based_on: [
        "Array of strings",
        "Array of objects",
        "Array of arrays",
        "Block of HTML elements",
        "Object key value pairs"
      ]
    };
  }
};
</script>

<style>
hr{
    border: 2px solid black;
    width: 200px;
}

</style>