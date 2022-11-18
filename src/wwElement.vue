<template>
  <input
    type="radio"
    class="my-input-radio"
    :id="content.inputId"
    :name="wwElementState.name"
    :value="this.value"
    :checked="this.value === this.content.selectedValue"
  />
</template>
<!-- //this.value === content.selectedValue -->

<script>
export default {
  props: {
    content: { type: Object, required: true },
    wwElementState: { type: Object, required: true },
    uid: { type: String, required: true },
  },

  emits: ["trigger-event", "update:content:effect", "update:sidepanel-content"],
  setup(props) {
    const { value, setValue } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: "inputValue",
      type: "string",
      defaultValue: props.content.inputValue,
    });

    return { value, setValue };
  },
  computed: {
    isEditing() {
      return (
        this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION
      );
    },
  },

  watch: {
    "content.inputValue"(newValue) {
      //you need to update it
      //need to make inputValue available as wewebState
      this.setValue(newValue);
    },
    "content.selectedValue"(newValue) {
      console.log("selectedValue has updated", newValue);
    },
  },
  method: {},
};
</script>

<style lang="scss" scoped>
.my-input-radio {
  padding: 0;
  margin: 0;
  width: inherit;
}
</style>
