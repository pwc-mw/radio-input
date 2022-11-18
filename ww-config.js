export default {
  editor: {
    label: {
      en: "radio-input",
    },
  },
  properties: {
    inputId: {
      label: { en: "input Id" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true,
    },
    inputValue: {
      label: { en: "value" },
      type: "Text",
      section: "settings",
      defaultValue: "",
      bindable: true,
    },
    selectedValue: {
      label: { en: "selectedValue" },
      type: "Text",
      section: "settings",
      defaultValue: "0", // to make the first radio button active
      bindable: true,
    },
  },
};
