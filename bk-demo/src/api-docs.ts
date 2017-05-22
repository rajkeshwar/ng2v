const API_DOCS = {
  "Ng2vAccordionConfig": {
    "fileName": "src/accordion/accordion-config.ts",
    "className": "Ng2vAccordionConfig",
    "description": "Configuration service for the Ng2vAccordion component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the accordions used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "closeOthers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  "Ng2vPanelTitle": {
    "fileName": "src/accordion/accordion.ts",
    "className": "Ng2vPanelTitle",
    "description": "This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.",
    "selector": "ng-template[ng2vPanelTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vPanelContent": {
    "fileName": "src/accordion/accordion.ts",
    "className": "Ng2vPanelContent",
    "description": "This directive must be used to wrap accordion panel content.",
    "selector": "ng-template[ng2vPanelContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vPanel": {
    "fileName": "src/accordion/accordion.ts",
    "className": "Ng2vPanel",
    "description": "The Ng2vPanel directive represents an individual panel with the title and collapsible\r\ncontent",
    "selector": "ng2v-panel",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "A flag determining whether the panel is disabled or not.\r\nWhen disabled, the panel cannot be toggled."
      },
      {
        "name": "id",
        "type": "string",
        "description": "An optional id for the panel. The id should be unique.\r\nIf not provided, it will be auto-generated."
      },
      {
        "name": "title",
        "type": "string",
        "description": "The title for the panel."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Accordion's types of panels to be applied per panel basis.\r\nBootstrap 4 recognizes the following types: \"success\", \"info\", \"warning\" and \"danger\"."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "Ng2vPanelContent",
        "description": ""
      },
      {
        "name": "titleTpl",
        "type": "Ng2vPanelTitle",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vPanelChangeEvent": {
    "fileName": "src/accordion/accordion.ts",
    "className": "Ng2vPanelChangeEvent",
    "description": "The payload of the change event fired right before toggling an accordion panel",
    "methods": [],
    "properties": [
      {
        "name": "nextState",
        "type": "boolean",
        "description": "Whether the panel will be opened (true) or closed (false)"
      },
      {
        "name": "panelId",
        "type": "string",
        "description": "Id of the accordion panel that is toggled"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "Function that will prevent panel toggling if called"
      }
    ]
  },
  "Ng2vAccordion": {
    "fileName": "src/accordion/accordion.ts",
    "className": "Ng2vAccordion",
    "description": "The Ng2vAccordion directive is a collection of panels.\r\nIt can assure that only one panel can be opened at a time.",
    "selector": "ng2v-accordion",
    "exportAs": "ng2vAccordion",
    "inputs": [
      {
        "name": "activeIds",
        "type": "string | string[]",
        "description": "An array or comma separated strings of panel identifiers that should be opened"
      },
      {
        "name": "closeOthers",
        "type": "boolean",
        "description": "Whether the other panels should be closed when a panel is opened"
      },
      {
        "name": "type",
        "type": "string",
        "description": "Accordion's types of panels to be applied globally.\r\nBootstrap 4 recognizes the following types: \"success\", \"info\", \"warning\" and \"danger\"."
      }
    ],
    "outputs": [
      {
        "name": "panelChange",
        "description": "A panel change event fired right before the panel toggle happens. See Ng2vPanelChangeEvent for payload details"
      }
    ],
    "properties": [
      {
        "name": "panels",
        "type": "QueryList<Ng2vPanel>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "toggle",
        "description": "Programmatically toggle a panel with a given id.",
        "args": [
          {
            "name": "panelId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "Ng2vAlertConfig": {
    "fileName": "src/alert/alert-config.ts",
    "className": "Ng2vAlertConfig",
    "description": "Configuration service for the Ng2vAlert component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the alerts used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "dismissible",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "defaultValue": "warning",
        "type": "string",
        "description": ""
      }
    ]
  },
  "Ng2vAlert": {
    "fileName": "src/alert/alert.ts",
    "className": "Ng2vAlert",
    "description": "Alerts can be used to provide feedback messages.",
    "selector": "ng2v-alert",
    "inputs": [
      {
        "name": "dismissible",
        "type": "boolean",
        "description": "A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a\r\nform of an ×) will be displayed."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Alert type (CSS class). Bootstrap 4 recognizes the following types: \"success\", \"info\", \"warning\" and \"danger\"."
      }
    ],
    "outputs": [
      {
        "name": "close",
        "description": "An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts."
      }
    ],
    "properties": [],
    "methods": []
  },
  "Ng2vRadioGroup": {
    "fileName": "src/buttons/radio.ts",
    "className": "Ng2vRadioGroup",
    "description": "Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable\r\nspecified via ngModel.",
    "selector": "[ng2vRadioGroup]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vActiveLabel": {
    "fileName": "src/buttons/radio.ts",
    "className": "Ng2vActiveLabel",
    "description": "",
    "selector": "label.btn",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vRadio": {
    "fileName": "src/buttons/radio.ts",
    "className": "Ng2vRadio",
    "description": "Marks an input of type \"radio\" as part of the Ng2vRadioGroup.",
    "selector": "input[type=radio]",
    "inputs": [
      {
        "name": "checked",
        "type": "boolean",
        "description": "A flag indicating if a given radio button is checked."
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "A flag indicating if a given radio button is disabled."
      },
      {
        "name": "value",
        "type": "any",
        "description": "You can specify model value of a given radio by binding to the value property."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "checked",
        "type": "boolean",
        "description": "A flag indicating if a given radio button is checked."
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "A flag indicating if a given radio button is disabled."
      },
      {
        "name": "value",
        "type": "any",
        "description": "You can specify model value of a given radio by binding to the value property."
      }
    ],
    "methods": []
  },
  "Ng2vCarouselConfig": {
    "fileName": "src/carousel/carousel-config.ts",
    "className": "Ng2vCarouselConfig",
    "description": "Configuration service for the Ng2vCarousel component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the carousels used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "interval",
        "defaultValue": "5000",
        "type": "number",
        "description": ""
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "wrap",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "Ng2vSlide": {
    "fileName": "src/carousel/carousel.ts",
    "className": "Ng2vSlide",
    "description": "Represents an individual slide to be used within a carousel.",
    "selector": "ng-template[ng2vSlide]",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": "Unique slide identifier. Must be unique for the entire document for proper accessibility support.\r\nWill be auto-generated if not provided."
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vCarousel": {
    "fileName": "src/carousel/carousel.ts",
    "className": "Ng2vCarousel",
    "description": "Directive to easily create carousels based on Bootstrap's markup.",
    "selector": "ng2v-carousel",
    "exportAs": "ng2vCarousel",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "The active slide id."
      },
      {
        "name": "interval",
        "type": "number",
        "description": "Amount of time in milliseconds before next slide is shown."
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "A flag for allowing navigation via keyboard"
      },
      {
        "name": "wrap",
        "type": "boolean",
        "description": "Whether can wrap from the last to the first slide."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "slides",
        "type": "QueryList<Ng2vSlide>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "Navigate to a slide with the specified identifier.",
        "args": [
          {
            "name": "slideId",
            "type": "string"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "prev",
        "description": "Navigate to the next slide.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "next",
        "description": "Navigate to the next slide.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "pause",
        "description": "Stops the carousel from cycling through items.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "cycle",
        "description": "Restarts cycling through the carousel slides from left to right.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "Ng2vCollapse": {
    "fileName": "src/collapse/collapse.ts",
    "className": "Ng2vCollapse",
    "description": "The Ng2vCollapse directive provides a simple way to hide and show an element with animations.",
    "selector": "[ng2vCollapse]",
    "exportAs": "ng2vCollapse",
    "inputs": [
      {
        "name": "ng2vCollapse",
        "defaultValue": "false",
        "type": "boolean",
        "description": "A flag indicating collapsed (true) or open (false) state."
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vDatepickerConfig": {
    "fileName": "src/datepicker/datepicker-config.ts",
    "className": "Ng2vDatepickerConfig",
    "description": "Configuration service for the Ng2vDatepicker component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the datepickers used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": ""
      },
      {
        "name": "displayMonths",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "firstDayOfWeek",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "markDisabled",
        "type": "(date: Ng2vDateStruct, current: { year: number; month: number; }) => boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "Ng2vDateStruct",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "Ng2vDateStruct",
        "description": ""
      },
      {
        "name": "navigation",
        "defaultValue": "select",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": ""
      },
      {
        "name": "outsideDays",
        "defaultValue": "visible",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": ""
      },
      {
        "name": "showWeekdays",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": ""
      }
    ]
  },
  "DayTemplateContext": {
    "fileName": "src/datepicker/datepicker-day-template-context.ts",
    "className": "DayTemplateContext",
    "description": "Context for the datepicker 'day' template in case you want to override the default one",
    "methods": [],
    "properties": [
      {
        "name": "currentMonth",
        "type": "number",
        "description": "Month currently displayed by the datepicker"
      },
      {
        "name": "date",
        "type": "Ng2vDateStruct",
        "description": "Date that corresponds to the template"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "True if current date is disabled"
      },
      {
        "name": "selected",
        "type": "boolean",
        "description": "True if current date is selected"
      }
    ]
  },
  "Ng2vDatepickerDayView": {
    "fileName": "src/datepicker/datepicker-day-view.ts",
    "className": "Ng2vDatepickerDayView",
    "description": "",
    "selector": "[ng2vDatepickerDayView]",
    "inputs": [
      {
        "name": "currentMonth",
        "type": "number",
        "description": ""
      },
      {
        "name": "date",
        "type": "Ng2vDateStruct",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "selected",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vDatepickerI18n": {
    "fileName": "src/datepicker/datepicker-i18n.ts",
    "className": "Ng2vDatepickerI18n",
    "description": "Type of the service supplying month and weekday names to to Ng2vDatepicker component.\r\nSee the i18n demo for how to extend this class and define a custom provider for i18n.",
    "methods": [
      {
        "name": "getWeekdayShortName",
        "description": "Returns the short weekday name to display in the heading of the month view.\r\nWith default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun",
        "args": [
          {
            "name": "weekday",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthShortName",
        "description": "Returns the short month name to display in the date picker navigation.\r\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec",
        "args": [
          {
            "name": "month",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthFullName",
        "description": "Returns the full month name to display in the date picker navigation.\r\nWith default calendar we use ISO 8601: 'month' is 1=January ... 12=December",
        "args": [
          {
            "name": "month",
            "type": "number"
          }
        ],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "Ng2vDatepickerI18nDefault": {
    "fileName": "src/datepicker/datepicker-i18n.ts",
    "className": "Ng2vDatepickerI18nDefault",
    "description": "",
    "methods": [],
    "properties": []
  },
  "Ng2vInputDatepicker": {
    "fileName": "src/datepicker/datepicker-input.ts",
    "className": "Ng2vInputDatepicker",
    "description": "A directive that makes it possible to have datepickers on input fields.\r\nManages integration with the input field itself (data entry) and ngModel (validation etc.).",
    "selector": "input[ng2vDatepicker]",
    "exportAs": "ng2vDatepicker",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "Reference for the custom template for the day display"
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "Number of months to display"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "First day of the week. With default calendar we use ISO 8601: 1=Mon ... 7=Sun"
      },
      {
        "name": "markDisabled",
        "type": "(date: Ng2vDateStruct, current: { year: number; month: number; }) => boolean",
        "description": "Callback to mark a given date as disabled.\r\n'Current' contains the month that will be displayed in the view"
      },
      {
        "name": "maxDate",
        "type": "Ng2vDateStruct",
        "description": "Max date for the navigation. If not provided will be 10 years from today or `startDate`"
      },
      {
        "name": "minDate",
        "type": "Ng2vDateStruct",
        "description": "Min date for the navigation. If not provided will be 10 years before today or `startDate`"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "Navigation type: `select` (default with select boxes for month and year), `arrows`\r\n(without select boxes, only navigation arrows) or `none` (no navigation at all)"
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": "The way to display days that don't belong to current month: `visible` (default),\r\n`hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)"
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "Whether to display days of the week"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "Whether to display week numbers"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": "Date to open calendar with.\r\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\r\nIf nothing or invalid date provided, calendar will open with current month.\r\nUse 'navigateTo(date)' as an alternative"
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": "An event fired when navigation happens and currently displayed month changes.\r\nSee Ng2vDatepickerNavigateEvent for the payload info."
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "Opens the datepicker with the selected date indicated by the ngModel value.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes the datepicker popup.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles the datepicker popup (opens when closed and closes when opened).",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "navigateTo",
        "description": "Navigates current view to provided date.\r\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\r\nIf nothing or invalid date provided calendar will open current month.\r\nUse 'startDate' input as an alternative",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "Ng2vDatepickerMonthView": {
    "fileName": "src/datepicker/datepicker-month-view.ts",
    "className": "Ng2vDatepickerMonthView",
    "description": "",
    "selector": "ng2v-datepicker-month-view",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "month",
        "type": "MonthViewModel",
        "description": ""
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": ""
      },
      {
        "name": "selectedDate",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "showWeekdays",
        "type": "any",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "Ng2vDatepickerNavigationSelect": {
    "fileName": "src/datepicker/datepicker-navigation-select.ts",
    "className": "Ng2vDatepickerNavigationSelect",
    "description": "",
    "selector": "ng2v-datepicker-navigation-select",
    "inputs": [
      {
        "name": "date",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "Ng2vDate",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "months",
        "type": "number[]",
        "description": ""
      },
      {
        "name": "years",
        "type": "number[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vDatepickerNavigation": {
    "fileName": "src/datepicker/datepicker-navigation.ts",
    "className": "Ng2vDatepickerNavigation",
    "description": "",
    "selector": "ng2v-datepicker-navigation",
    "inputs": [
      {
        "name": "date",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "months",
        "type": "number",
        "description": ""
      },
      {
        "name": "showSelect",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": ""
      },
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "navigation",
        "defaultValue": "NavigationEvent",
        "type": "typeof NavigationEvent",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vDatepickerService": {
    "fileName": "src/datepicker/datepicker-service.ts",
    "className": "Ng2vDatepickerService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "Ng2vDatepickerNavigateEvent": {
    "fileName": "src/datepicker/datepicker.ts",
    "className": "Ng2vDatepickerNavigateEvent",
    "description": "The payload of the datepicker navigation event",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "{ year: number; month: number; }",
        "description": "Currently displayed month"
      },
      {
        "name": "next",
        "type": "{ year: number; month: number; }",
        "description": "Month we're navigating to"
      }
    ]
  },
  "Ng2vDatepicker": {
    "fileName": "src/datepicker/datepicker.ts",
    "className": "Ng2vDatepicker",
    "description": "A lightweight and highly configurable datepicker directive",
    "selector": "ng2v-datepicker",
    "exportAs": "ng2vDatepicker",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "Reference for the custom template for the day display"
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "Number of months to display"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun"
      },
      {
        "name": "markDisabled",
        "type": "(date: Ng2vDateStruct, current: { year: number; month: number; }) => boolean",
        "description": "Callback to mark a given date as disabled.\r\n'Current' contains the month that will be displayed in the view"
      },
      {
        "name": "maxDate",
        "type": "Ng2vDateStruct",
        "description": "Max date for the navigation. If not provided will be 10 years from today or `startDate`"
      },
      {
        "name": "minDate",
        "type": "Ng2vDateStruct",
        "description": "Min date for the navigation. If not provided will be 10 years before today or `startDate`"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "Navigation type: `select` (default with select boxes for month and year), `arrows`\r\n(without select boxes, only navigation arrows) or `none` (no navigation at all)"
      },
      {
        "name": "outsideDays",
        "type": "\"visible\" | \"collapsed\" | \"hidden\"",
        "description": "The way to display days that don't belong to current month: `visible` (default),\r\n`hidden` (not displayed) or `collapsed` (not displayed with empty space collapsed)"
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "Whether to display days of the week"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "Whether to display week numbers"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": "Date to open calendar with.\r\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\r\nIf nothing or invalid date provided, calendar will open with current month.\r\nUse 'navigateTo(date)' as an alternative"
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": "An event fired when navigation happens and currently displayed month changes.\r\nSee Ng2vDatepickerNavigateEvent for the payload info."
      }
    ],
    "properties": [
      {
        "name": "_date",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "_maxDate",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "_minDate",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "model",
        "type": "Ng2vDate",
        "description": ""
      },
      {
        "name": "months",
        "type": "MonthViewModel[]",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "navigateTo",
        "description": "Navigates current view to provided date.\r\nWith default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.\r\nIf nothing or invalid date provided calendar will open current month.\r\nUse 'startDate' input as an alternative",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "Ng2vCalendarHijri": {
    "fileName": "src/datepicker/hijri/ng2v-calendar-hijri.ts",
    "className": "Ng2vCalendarHijri",
    "description": "",
    "methods": [
      {
        "name": "fromGregorian",
        "description": "Returns the equivalent Hijri date value for a give input Gregorian date.\r\n`gDate` is s JS Date to be converted to Hijri.",
        "args": [
          {
            "name": "gDate",
            "type": "Date"
          }
        ],
        "returnType": "Ng2vDate"
      },
      {
        "name": "toGregorian",
        "description": "Converts the current Hijri date to Gregorian.",
        "args": [
          {
            "name": "hijriDate",
            "type": "Ng2vDate"
          }
        ],
        "returnType": "Date"
      },
      {
        "name": "getDaysInIslamicMonth",
        "description": "Returns the number of days in a specific Hijri month.\r\n`month` is 1 for Muharram, 2 for Safar, etc.\r\n`year` is any Hijri year.",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "_getMonthStart",
        "description": "Returns the start of Hijri Month.\r\n`month` is 0 for Muharram, 1 for Safar, etc.\r\n`year` is any Hijri year.",
        "args": [
          {
            "name": "year",
            "type": "number"
          },
          {
            "name": "month",
            "type": "number"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "_getYearStart",
        "description": "Returns the start of Hijri year.\r\n`year` is any Hijri year.",
        "args": [
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      }
    ],
    "properties": []
  },
  "Ng2vCalendarIslamicCivil": {
    "fileName": "src/datepicker/hijri/ng2v-calendar-islamic-civil.ts",
    "className": "Ng2vCalendarIslamicCivil",
    "description": "",
    "methods": [
      {
        "name": "fromGregorian",
        "description": "Returns the equivalent islamic(civil) date value for a give input Gregorian date.\r\n`gdate` is a JS Date to be converted to Hijri.",
        "args": [
          {
            "name": "gdate",
            "type": "Date"
          }
        ],
        "returnType": "Ng2vDate"
      },
      {
        "name": "toGregorian",
        "description": "Returns the equivalent JS date value for a give input islamic(civil) date.\r\n`hijriDate` is an islamic(civil) date to be converted to Gregorian.",
        "args": [
          {
            "name": "hijriDate",
            "type": "Ng2vDate"
          }
        ],
        "returnType": "Date"
      },
      {
        "name": "getDaysInIslamicMonth",
        "description": "Returns the number of days in a specific Hijri month.\r\n`month` is 1 for Muharram, 2 for Safar, etc.\r\n`year` is any Hijri year.",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number"
      }
    ],
    "properties": []
  },
  "Ng2vCalendar": {
    "fileName": "src/datepicker/ng2v-calendar.ts",
    "className": "Ng2vCalendar",
    "description": "",
    "methods": [],
    "properties": []
  },
  "Ng2vCalendarGregorian": {
    "fileName": "src/datepicker/ng2v-calendar.ts",
    "className": "Ng2vCalendarGregorian",
    "description": "",
    "methods": [],
    "properties": []
  },
  "Ng2vDateParserFormatter": {
    "fileName": "src/datepicker/ng2v-date-parser-formatter.ts",
    "className": "Ng2vDateParserFormatter",
    "description": "Abstract type serving as a DI token for the service parsing and formatting dates for the Ng2vInputDatepicker\r\ndirective. A default implementation using the ISO 8601 format is provided, but you can provide another implementation\r\nto use an alternative format.",
    "methods": [
      {
        "name": "parse",
        "description": "Parses the given value to an Ng2vDateStruct. Implementations should try their best to provide a result, even\r\npartial. They must return null if the value can't be parsed.",
        "args": [
          {
            "name": "value",
            "type": "string"
          }
        ],
        "returnType": "Ng2vDateStruct"
      },
      {
        "name": "format",
        "description": "Formats the given date to a string. Implementations should return an empty string if the given date is null,\r\nand try their best to provide a partial result if the given date is incomplete or invalid.",
        "args": [
          {
            "name": "date",
            "type": "Ng2vDateStruct"
          }
        ],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "Ng2vDateStruct": {
    "fileName": "src/datepicker/ng2v-date-struct.ts",
    "className": "Ng2vDateStruct",
    "description": "Interface of the model of the Ng2vDatepicker and Ng2vInputDatepicker directives",
    "methods": [],
    "properties": [
      {
        "name": "day",
        "type": "number",
        "description": "The day of month, starting at 1"
      },
      {
        "name": "month",
        "type": "number",
        "description": "The month, with default calendar we use ISO 8601: 1=Jan ... 12=Dec"
      },
      {
        "name": "year",
        "type": "number",
        "description": "The year, for example 2016"
      }
    ]
  },
  "Ng2vDropdownConfig": {
    "fileName": "src/dropdown/dropdown-config.ts",
    "className": "Ng2vDropdownConfig",
    "description": "Configuration service for the Ng2vDropdown directive.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the dropdowns used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "up",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "Ng2vDropdown": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "Ng2vDropdown",
    "description": "Transforms a node into a dropdown.",
    "selector": "[ng2vDropdown]",
    "exportAs": "ng2vDropdown",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean",
        "description": "Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC."
      },
      {
        "name": "open",
        "defaultValue": "false",
        "type": "boolean",
        "description": "Defines whether or not the dropdown-menu is open initially."
      },
      {
        "name": "up",
        "type": "boolean",
        "description": "Indicates that the dropdown should open upwards"
      }
    ],
    "outputs": [
      {
        "name": "openChange",
        "description": "An event fired when the dropdown is opened or closed.\r\nEvent's payload equals whether dropdown is open."
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "isOpen",
        "description": "Checks if the dropdown menu is open or not.",
        "args": [],
        "returnType": "boolean"
      },
      {
        "name": "open",
        "description": "Opens the dropdown menu of a given navbar or tabbed navigation.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes the dropdown menu of a given navbar or tabbed navigation.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles the dropdown menu of a given navbar or tabbed navigation.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "Ng2vDropdownToggle": {
    "fileName": "src/dropdown/dropdown.ts",
    "className": "Ng2vDropdownToggle",
    "description": "Allows the dropdown to be toggled via click. This directive is optional.",
    "selector": "[ng2vDropdownToggle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vModalBackdrop": {
    "fileName": "src/modal/modal-backdrop.ts",
    "className": "Ng2vModalBackdrop",
    "description": "",
    "selector": "ng2v-modal-backdrop",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vActiveModal": {
    "fileName": "src/modal/modal-ref.ts",
    "className": "Ng2vActiveModal",
    "description": "A reference to an active (currently opened) modal. Instances of this class\r\ncan be injected into components passed as modal content.",
    "methods": [
      {
        "name": "close",
        "description": "Can be used to close a modal, passing an optional result.",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "Can be used to dismiss a modal, passing an optional reason.",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": []
  },
  "Ng2vModalRef": {
    "fileName": "src/modal/modal-ref.ts",
    "className": "Ng2vModalRef",
    "description": "A reference to a newly opened modal.",
    "methods": [
      {
        "name": "close",
        "description": "Can be used to close a modal, passing an optional result.",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "Can be used to dismiss a modal, passing an optional reason.",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "componentInstance",
        "type": "any",
        "description": "The instance of component used as modal's content.\r\nUndefined when a TemplateRef is used as modal's content."
      },
      {
        "name": "result",
        "type": "Promise<any>",
        "description": "A promise that is resolved when a modal is closed and rejected when a modal is dismissed."
      }
    ]
  },
  "Ng2vModalStack": {
    "fileName": "src/modal/modal-stack.ts",
    "className": "Ng2vModalStack",
    "description": "",
    "methods": [],
    "properties": []
  },
  "Ng2vModalWindow": {
    "fileName": "src/modal/modal-window.ts",
    "className": "Ng2vModalWindow",
    "description": "",
    "selector": "ng2v-modal-window",
    "inputs": [
      {
        "name": "backdrop",
        "defaultValue": "true",
        "type": "string | boolean",
        "description": ""
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "size",
        "type": "string",
        "description": ""
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "dismiss",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "Ng2vModalOptions": {
    "fileName": "src/modal/modal.ts",
    "className": "Ng2vModalOptions",
    "description": "Represent options available when opening new modal windows.",
    "methods": [],
    "properties": [
      {
        "name": "backdrop",
        "type": "boolean | \"static\"",
        "description": "Whether a backdrop element should be created for a given modal (true by default).\r\nAlternatively, specify 'static' for a backdrop which doesn't close the modal on click."
      },
      {
        "name": "container",
        "type": "string",
        "description": "An element to which to attach newly opened modal windows."
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "Whether to close the modal when escape key is pressed (true by default)."
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "Size of a new modal window."
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": "Custom class to append to the modal window"
      }
    ]
  },
  "Ng2vModal": {
    "fileName": "src/modal/modal.ts",
    "className": "Ng2vModal",
    "description": "A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to\r\nthe \"open\" method!",
    "methods": [
      {
        "name": "open",
        "description": "Opens a new modal window with the specified content and using supplied options. Content can be provided\r\nas a TemplateRef or a component type. If you pass a component type as content than instances of those\r\ncomponents can be injected with an instance of the Ng2vActiveModal class. You can use methods on the\r\nNg2vActiveModal class to close / dismiss modals from \"inside\" of a component.",
        "args": [
          {
            "name": "content",
            "type": "any"
          },
          {
            "name": "options",
            "type": "Ng2vModalOptions"
          }
        ],
        "returnType": "Ng2vModalRef"
      }
    ],
    "properties": []
  },
  "Ng2vMultiselectConfig": {
    "fileName": "src/multiselect/multiselect-config.ts",
    "className": "Ng2vMultiselectConfig",
    "description": "Configuration service for the Ng2vMultiselect component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the paginations used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "autoUnselect",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "buttonClasses",
        "type": "string",
        "description": ""
      },
      {
        "name": "checkedStyle",
        "type": "\"checkboxes\" | \"glyphicon\" | \"fontawesome\"",
        "description": ""
      },
      {
        "name": "closeOnSelect",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "displayAllSelectedText",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dynamicTitleMaxItems",
        "type": "number",
        "description": ""
      },
      {
        "name": "enableSearch",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "itemClasses",
        "type": "string",
        "description": ""
      },
      {
        "name": "maxHeight",
        "type": "string",
        "description": ""
      },
      {
        "name": "pullRight",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "selectionLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "showCheckAll",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showUncheckAll",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "Ng2vMultiselectDefaultConfig": {
    "fileName": "src/multiselect/multiselect.default-config.ts",
    "className": "Ng2vMultiselectDefaultConfig",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "autoUnselect",
        "type": "false",
        "description": ""
      },
      {
        "name": "buttonClasses",
        "type": "\"btn btn-default btn-secondary\"",
        "description": ""
      },
      {
        "name": "checkedStyle",
        "type": "\"checkboxes\"",
        "description": ""
      },
      {
        "name": "closeOnSelect",
        "type": "false",
        "description": ""
      },
      {
        "name": "dynamicTitleMaxItems",
        "type": "1",
        "description": ""
      },
      {
        "name": "enableSearch",
        "type": "true",
        "description": ""
      },
      {
        "name": "maxHeight",
        "type": "\"300px\"",
        "description": ""
      },
      {
        "name": "pullRight",
        "type": "false",
        "description": ""
      },
      {
        "name": "selectionLimit",
        "type": "0",
        "description": ""
      },
      {
        "name": "showCheckAll",
        "type": "true",
        "description": ""
      },
      {
        "name": "showUncheckAll",
        "type": "true",
        "description": ""
      }
    ]
  },
  "IMultiSelectOption": {
    "fileName": "src/multiselect/multiselect.ts",
    "className": "IMultiSelectOption",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "isChecked",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isLabel",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "params",
        "type": "any",
        "description": ""
      },
      {
        "name": "parentId",
        "type": "any",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  "IMultiSelectSettings": {
    "fileName": "src/multiselect/multiselect.ts",
    "className": "IMultiSelectSettings",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "autoUnselect",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "buttonClasses",
        "type": "string",
        "description": ""
      },
      {
        "name": "checkedStyle",
        "type": "\"checkboxes\" | \"glyphicon\" | \"fontawesome\"",
        "description": ""
      },
      {
        "name": "closeOnSelect",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "displayAllSelectedText",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dynamicTitleMaxItems",
        "type": "number",
        "description": ""
      },
      {
        "name": "enableSearch",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "itemClasses",
        "type": "string",
        "description": ""
      },
      {
        "name": "maxHeight",
        "type": "string",
        "description": ""
      },
      {
        "name": "pullRight",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "selectionLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "showCheckAll",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showUncheckAll",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "IMultiSelectTexts": {
    "fileName": "src/multiselect/multiselect.ts",
    "className": "IMultiSelectTexts",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "allSelected",
        "type": "string",
        "description": ""
      },
      {
        "name": "checkAll",
        "type": "string",
        "description": ""
      },
      {
        "name": "checked",
        "type": "string",
        "description": ""
      },
      {
        "name": "checkedPlural",
        "type": "string",
        "description": ""
      },
      {
        "name": "defaultTitle",
        "type": "string",
        "description": ""
      },
      {
        "name": "searchPlaceholder",
        "type": "string",
        "description": ""
      },
      {
        "name": "uncheckAll",
        "type": "string",
        "description": ""
      }
    ]
  },
  "Ng2vMultiselect": {
    "fileName": "src/multiselect/multiselect.ts",
    "className": "Ng2vMultiselect",
    "description": "",
    "selector": "ng2v-multiselect",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "loading",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "options",
        "type": "IMultiSelectOption[]",
        "description": ""
      },
      {
        "name": "settings",
        "type": "IMultiSelectSettings",
        "description": ""
      },
      {
        "name": "texts",
        "type": "IMultiSelectTexts",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "clearFilter",
        "description": ""
      },
      {
        "name": "dropdownClosed",
        "description": ""
      },
      {
        "name": "dropdownOpen",
        "description": ""
      },
      {
        "name": "onAdded",
        "description": ""
      },
      {
        "name": "onRemoved",
        "description": ""
      },
      {
        "name": "searchValueChange",
        "description": ""
      },
      {
        "name": "selectionLimitReached",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "defaultSettings",
        "type": "IMultiSelectSettings",
        "description": ""
      },
      {
        "name": "defaultTexts",
        "type": "IMultiSelectTexts",
        "description": ""
      },
      {
        "name": "differ",
        "type": "any",
        "description": ""
      },
      {
        "name": "fewChecked",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isCheckedAll",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isVisible",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxZIndex",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "model",
        "type": "IMultiSelectOption[]",
        "description": ""
      },
      {
        "name": "numSelected",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "onModelChange",
        "type": "Function",
        "description": ""
      },
      {
        "name": "onModelTouched",
        "type": "Function",
        "description": ""
      },
      {
        "name": "searchFilterText",
        "type": "string",
        "description": ""
      },
      {
        "name": "title",
        "type": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vPaginationConfig": {
    "fileName": "src/pagination/pagination-config.ts",
    "className": "Ng2vPaginationConfig",
    "description": "Configuration service for the Ng2vPagination component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the paginations used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "boundaryLinks",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "directionLinks",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ellipses",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "maxSize",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pageSize",
        "defaultValue": "10",
        "type": "number",
        "description": ""
      },
      {
        "name": "rotate",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": ""
      }
    ]
  },
  "Ng2vPagination": {
    "fileName": "src/pagination/pagination.ts",
    "className": "Ng2vPagination",
    "description": "A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!",
    "selector": "ng2v-pagination",
    "inputs": [
      {
        "name": "boundaryLinks",
        "type": "boolean",
        "description": "Whether to show the \"First\" and \"Last\" page links"
      },
      {
        "name": "collectionSize",
        "type": "number",
        "description": "Number of items in collection."
      },
      {
        "name": "directionLinks",
        "type": "boolean",
        "description": "Whether to show the \"Next\" and \"Previous\" page links"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "Whether to disable buttons from user input"
      },
      {
        "name": "ellipses",
        "type": "boolean",
        "description": "Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages"
      },
      {
        "name": "maxSize",
        "type": "number",
        "description": "Maximum number of pages to display."
      },
      {
        "name": "page",
        "defaultValue": "0",
        "type": "number",
        "description": "Current page."
      },
      {
        "name": "pageSize",
        "type": "number",
        "description": "Number of items per page."
      },
      {
        "name": "rotate",
        "type": "boolean",
        "description": "Whether to rotate pages when maxSize > number of pages.\r\nCurrent page will be in the middle"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "Pagination display size: small or large"
      }
    ],
    "outputs": [
      {
        "name": "pageChange",
        "description": "An event fired when the page is changed.\r\nEvent's payload equals to the newly selected page."
      }
    ],
    "properties": [
      {
        "name": "pageCount",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pages",
        "type": "number[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vPopoverConfig": {
    "fileName": "src/popover/popover-config.ts",
    "className": "Ng2vPopoverConfig",
    "description": "Configuration service for the Ng2vPopover directive.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the popovers used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "click",
        "type": "string",
        "description": ""
      }
    ]
  },
  "Ng2vPopoverWindow": {
    "fileName": "src/popover/popover.ts",
    "className": "Ng2vPopoverWindow",
    "description": "",
    "selector": "ng2v-popover-window",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": ""
      },
      {
        "name": "title",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vPopover": {
    "fileName": "src/popover/popover.ts",
    "className": "Ng2vPopover",
    "description": "A lightweight, extensible directive for fancy popover creation.",
    "selector": "[ng2vPopover]",
    "exportAs": "ng2vPopover",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the popover should be appended to.\r\nCurrently only supports \"body\"."
      },
      {
        "name": "ng2vPopover",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as popover."
      },
      {
        "name": "placement",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": "Placement of a popover. Accepts: \"top\", \"bottom\", \"left\", \"right\""
      },
      {
        "name": "popoverTitle",
        "type": "string",
        "description": "Title of a popover."
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "Specifies events that should trigger. Supports a space separated list of event names."
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "Emits an event when the popover is hidden"
      },
      {
        "name": "shown",
        "description": "Emits an event when the popover is shown"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "Opens an element’s popover. This is considered a “manual” triggering of the popover.\r\nThe context is an optional value to be injected into the popover template when it is created.",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes an element’s popover. This is considered a “manual” triggering of the popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles an element’s popover. This is considered a “manual” triggering of the popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "Returns whether or not the popover is currently being shown",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "Ng2vProgressbarConfig": {
    "fileName": "src/progressbar/progressbar-config.ts",
    "className": "Ng2vProgressbarConfig",
    "description": "Configuration service for the Ng2vProgressbar component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the progress bars used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "animated",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "max",
        "defaultValue": "100",
        "type": "number",
        "description": ""
      },
      {
        "name": "showValue",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "striped",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  "Ng2vProgressbar": {
    "fileName": "src/progressbar/progressbar.ts",
    "className": "Ng2vProgressbar",
    "description": "Directive that can be used to provide feedback on the progress of a workflow or an action.",
    "selector": "ng2v-progressbar",
    "inputs": [
      {
        "name": "animated",
        "type": "boolean",
        "description": "A flag indicating if the stripes of the progress bar should be animated. Takes effect only for browsers\r\nsupporting CSS3 animations, and if striped is true."
      },
      {
        "name": "max",
        "type": "number",
        "description": "Maximal value to be displayed in the progressbar."
      },
      {
        "name": "showValue",
        "type": "boolean",
        "description": "A flag indicating if the current percentage value should be shown."
      },
      {
        "name": "striped",
        "type": "boolean",
        "description": "A flag indicating if a progress bar should be displayed as striped."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Type of progress bar, can be one of \"success\", \"info\", \"warning\" or \"danger\"."
      },
      {
        "name": "value",
        "defaultValue": "0",
        "type": "number",
        "description": "Current value to be displayed in the progressbar. Should be smaller or equal to \"max\" value."
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vRatingConfig": {
    "fileName": "src/rating/rating-config.ts",
    "className": "Ng2vRatingConfig",
    "description": "Configuration service for the Ng2vRating component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the ratings used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "max",
        "defaultValue": "10",
        "type": "number",
        "description": ""
      },
      {
        "name": "readonly",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "resettable",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "StarTemplateContext": {
    "fileName": "src/rating/rating.ts",
    "className": "StarTemplateContext",
    "description": "Context for the custom star display template",
    "methods": [],
    "properties": [
      {
        "name": "fill",
        "type": "number",
        "description": "Star fill percentage. An integer value between 0 and 100"
      }
    ]
  },
  "Ng2vRating": {
    "fileName": "src/rating/rating.ts",
    "className": "Ng2vRating",
    "description": "Rating directive that will take care of visualising a star rating bar.",
    "selector": "ng2v-rating",
    "inputs": [
      {
        "name": "max",
        "type": "number",
        "description": "Maximal rating that can be given using this widget."
      },
      {
        "name": "rate",
        "type": "number",
        "description": "Current rating. Can be a decimal value like 3.75"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "description": "A flag indicating if rating can be updated."
      },
      {
        "name": "resettable",
        "type": "boolean",
        "description": "A flag indicating if rating can be reset to 0 on mouse click"
      },
      {
        "name": "starTemplate",
        "type": "TemplateRef<StarTemplateContext>",
        "description": "A template to override star display.\r\nAlternatively put a <ng-template> as the only child of <ng2v-rating> element"
      }
    ],
    "outputs": [
      {
        "name": "hover",
        "description": "An event fired when a user is hovering over a given rating.\r\nEvent's payload equals to the rating being hovered over."
      },
      {
        "name": "leave",
        "description": "An event fired when a user stops hovering over a given rating.\r\nEvent's payload equals to the rating of the last item being hovered over."
      },
      {
        "name": "rateChange",
        "description": "An event fired when a user selects a new rating.\r\nEvent's payload equals to the newly selected rating."
      }
    ],
    "properties": [
      {
        "name": "contexts",
        "type": "StarTemplateContext[]",
        "description": ""
      },
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "nextRate",
        "type": "number",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vSideMenuComponent": {
    "fileName": "src/sidemenu/sidemenu.component.ts",
    "className": "Ng2vSideMenuComponent",
    "description": "",
    "selector": "ng2v-side-menu",
    "inputs": [
      {
        "name": "menus",
        "type": "any[]",
        "description": ""
      },
      {
        "name": "styles",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "isMenuOpen",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isOpen",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "zIndex",
        "type": "number",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vSidemenuConfig": {
    "fileName": "src/sidemenu/sidemenu.config.ts",
    "className": "Ng2vSidemenuConfig",
    "description": "Configuration service for the Ng2vSideMenu component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the sidemenu used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "isMenuOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "menus",
        "type": "({ 'icon': string; label: string; href: string; } | { 'icon': string; label: string; } | { 'icon'...",
        "description": ""
      },
      {
        "name": "styles",
        "type": "{ top: string; }",
        "description": ""
      },
      {
        "name": "zIndex",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ]
  },
  "Ng2vTabsetConfig": {
    "fileName": "src/tabset/tabset-config.ts",
    "className": "Ng2vTabsetConfig",
    "description": "Configuration service for the Ng2vTabset component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the tabsets used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "justify",
        "defaultValue": "start",
        "type": "\"start\" | \"center\" | \"end\"",
        "description": ""
      },
      {
        "name": "type",
        "defaultValue": "tabs",
        "type": "\"tabs\" | \"pills\"",
        "description": ""
      }
    ]
  },
  "Ng2vTabTitle": {
    "fileName": "src/tabset/tabset.ts",
    "className": "Ng2vTabTitle",
    "description": "This directive should be used to wrap tab titles that need to contain HTML markup or other directives.",
    "selector": "ng-template[ng2vTabTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vTabContent": {
    "fileName": "src/tabset/tabset.ts",
    "className": "Ng2vTabContent",
    "description": "This directive must be used to wrap content to be displayed in a tab.",
    "selector": "ng-template[ng2vTabContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vTab": {
    "fileName": "src/tabset/tabset.ts",
    "className": "Ng2vTab",
    "description": "A directive representing an individual tab.",
    "selector": "ng2v-tab",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "Allows toggling disabled state of a given state. Disabled tabs can't be selected."
      },
      {
        "name": "id",
        "type": "string",
        "description": "Unique tab identifier. Must be unique for the entire document for proper accessibility support."
      },
      {
        "name": "title",
        "type": "string",
        "description": "Simple (string only) title. Use the \"Ng2vTabTitle\" directive for more complex use-cases."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "Ng2vTabContent",
        "description": ""
      },
      {
        "name": "titleTpl",
        "type": "Ng2vTabTitle",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vTabChangeEvent": {
    "fileName": "src/tabset/tabset.ts",
    "className": "Ng2vTabChangeEvent",
    "description": "The payload of the change event fired right before the tab change",
    "methods": [],
    "properties": [
      {
        "name": "activeId",
        "type": "string",
        "description": "Id of the currently active tab"
      },
      {
        "name": "nextId",
        "type": "string",
        "description": "Id of the newly selected tab"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "Function that will prevent tab switch if called"
      }
    ]
  },
  "Ng2vTabset": {
    "fileName": "src/tabset/tabset.ts",
    "className": "Ng2vTabset",
    "description": "A component that makes it easy to create tabbed interface.",
    "selector": "ng2v-tabset",
    "exportAs": "ng2vTabset",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "An identifier of an initially selected (active) tab. Use the \"select\" method to switch a tab programmatically."
      },
      {
        "name": "destroyOnHide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "Whether the closed tabs should be hidden without destroying them"
      },
      {
        "name": "justify",
        "type": "\"start\" | \"center\" | \"end\"",
        "description": "The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center' or 'end'"
      },
      {
        "name": "type",
        "type": "\"tabs\" | \"pills\"",
        "description": "Type of navigation to be used for tabs. Can be one of 'tabs' or 'pills'."
      }
    ],
    "outputs": [
      {
        "name": "tabChange",
        "description": "A tab change event fired right before the tab selection happens. See Ng2vTabChangeEvent for payload details"
      }
    ],
    "properties": [
      {
        "name": "tabs",
        "type": "QueryList<Ng2vTab>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "Selects the tab with the given id and shows its associated pane.\r\nAny other tab that was previously selected becomes unselected and its associated pane is hidden.",
        "args": [
          {
            "name": "tabId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "Ng2vTimeStruct": {
    "fileName": "src/timepicker/ng2v-time-struct.ts",
    "className": "Ng2vTimeStruct",
    "description": "Interface of the model of the Ng2vTimepicker directive",
    "methods": [],
    "properties": [
      {
        "name": "hour",
        "type": "number",
        "description": "The hour, going from 0 to 23"
      },
      {
        "name": "minute",
        "type": "number",
        "description": "The minute, going from 0 to 59"
      },
      {
        "name": "second",
        "type": "number",
        "description": "The second, going from 0 to 59"
      }
    ]
  },
  "Ng2vTimepickerConfig": {
    "fileName": "src/timepicker/timepicker-config.ts",
    "className": "Ng2vTimepickerConfig",
    "description": "Configuration service for the Ng2vTimepicker component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the timepickers used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hourStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "meridian",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "minuteStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "readonlyInputs",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "seconds",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "secondStep",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "size",
        "defaultValue": "medium",
        "type": "\"small\" | \"medium\" | \"large\"",
        "description": ""
      },
      {
        "name": "spinners",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "Ng2vTimepicker": {
    "fileName": "src/timepicker/timepicker.ts",
    "className": "Ng2vTimepicker",
    "description": "A lightweight & configurable timepicker directive.",
    "selector": "ng2v-timepicker",
    "inputs": [
      {
        "name": "hourStep",
        "type": "number",
        "description": "Number of hours to increase or decrease when using a button."
      },
      {
        "name": "meridian",
        "type": "boolean",
        "description": "Whether to display 12H or 24H mode."
      },
      {
        "name": "minuteStep",
        "type": "number",
        "description": "Number of minutes to increase or decrease when using a button."
      },
      {
        "name": "readonlyInputs",
        "type": "boolean",
        "description": "To make timepicker readonly"
      },
      {
        "name": "seconds",
        "type": "boolean",
        "description": "Whether to display seconds input."
      },
      {
        "name": "secondStep",
        "type": "number",
        "description": "Number of seconds to increase or decrease when using a button."
      },
      {
        "name": "size",
        "type": "\"small\" | \"medium\" | \"large\"",
        "description": "To set the size of the inputs and button"
      },
      {
        "name": "spinners",
        "type": "boolean",
        "description": "Whether to display the spinners above and below the inputs."
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "model",
        "type": "Ng2vTime",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vTooltipConfig": {
    "fileName": "src/tooltip/tooltip-config.ts",
    "className": "Ng2vTooltipConfig",
    "description": "Configuration service for the Ng2vTooltip directive.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the tooltips used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "hover",
        "type": "string",
        "description": ""
      }
    ]
  },
  "Ng2vTooltipWindow": {
    "fileName": "src/tooltip/tooltip.ts",
    "className": "Ng2vTooltipWindow",
    "description": "",
    "selector": "ng2v-tooltip-window",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "top",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "Ng2vTooltip": {
    "fileName": "src/tooltip/tooltip.ts",
    "className": "Ng2vTooltip",
    "description": "A lightweight, extensible directive for fancy tooltip creation.",
    "selector": "[ng2vTooltip]",
    "exportAs": "ng2vTooltip",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the tooltip should be appended to.\r\nCurrently only supports \"body\"."
      },
      {
        "name": "ng2vTooltip",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as tooltip. If falsy, the tooltip won't open."
      },
      {
        "name": "placement",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": "Placement of a tooltip. Accepts: \"top\", \"bottom\", \"left\", \"right\""
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "Specifies events that should trigger. Supports a space separated list of event names."
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "Emits an event when the tooltip is hidden"
      },
      {
        "name": "shown",
        "description": "Emits an event when the tooltip is shown"
      }
    ],
    "properties": [
      {
        "name": "ng2vTooltip",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as tooltip. If falsy, the tooltip won't open."
      }
    ],
    "methods": [
      {
        "name": "open",
        "description": "Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.\r\nThe context is an optional value to be injected into the tooltip template when it is created.",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "Returns whether or not the tooltip is currently being shown",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "Ng2vHighlight": {
    "fileName": "src/typeahead/highlight.ts",
    "className": "Ng2vHighlight",
    "description": "",
    "selector": "ng2v-highlight",
    "inputs": [
      {
        "name": "highlightClass",
        "defaultValue": "ng2v-highlight",
        "type": "string",
        "description": ""
      },
      {
        "name": "result",
        "type": "string",
        "description": ""
      },
      {
        "name": "term",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "parts",
        "type": "string[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vTypeaheadConfig": {
    "fileName": "src/typeahead/typeahead-config.ts",
    "className": "Ng2vTypeaheadConfig",
    "description": "Configuration service for the Ng2vTypeahead component.\r\nYou can inject this service, typically in your root component, and customize the values of its properties in\r\norder to provide default values for all the typeaheads used in the application.",
    "methods": [],
    "properties": [
      {
        "name": "editable",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "focusFirst",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showHint",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "ResultTemplateContext": {
    "fileName": "src/typeahead/typeahead-window.ts",
    "className": "ResultTemplateContext",
    "description": "Context for the typeahead result template in case you want to override the default one",
    "methods": [],
    "properties": [
      {
        "name": "result",
        "type": "any",
        "description": "Your typeahead result data model"
      },
      {
        "name": "term",
        "type": "string",
        "description": "Search term from the input used to get current result"
      }
    ]
  },
  "Ng2vTypeaheadWindow": {
    "fileName": "src/typeahead/typeahead-window.ts",
    "className": "Ng2vTypeaheadWindow",
    "description": "",
    "selector": "ng2v-typeahead-window",
    "exportAs": "ng2vTypeaheadWindow",
    "inputs": [
      {
        "name": "focusFirst",
        "defaultValue": "true",
        "type": "boolean",
        "description": "Flag indicating if the first row should be active initially"
      },
      {
        "name": "formatter",
        "defaultValue": "toString",
        "type": "(value: any) => string",
        "description": "A function used to format a given result before display. This function should return a formatted string without any\r\nHTML markup"
      },
      {
        "name": "id",
        "type": "string",
        "description": "The id for the typeahead widnow. The id should be unique and the same\r\nas the associated typeahead's id."
      },
      {
        "name": "results",
        "type": "any",
        "description": "Typeahead match results to be displayed"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "A template to override a matching result default display"
      },
      {
        "name": "term",
        "type": "string",
        "description": "Search term used to get current results"
      }
    ],
    "outputs": [
      {
        "name": "activeChange",
        "description": ""
      },
      {
        "name": "select",
        "description": "Event raised when user selects a particular result row"
      }
    ],
    "properties": [
      {
        "name": "activeIdx",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ],
    "methods": []
  },
  "Ng2vTypeaheadSelectItemEvent": {
    "fileName": "src/typeahead/typeahead.ts",
    "className": "Ng2vTypeaheadSelectItemEvent",
    "description": "Payload of the selectItem event.",
    "methods": [],
    "properties": [
      {
        "name": "item",
        "type": "any",
        "description": "An item about to be selected"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "Function that will prevent item selection if called"
      }
    ]
  },
  "Ng2vTypeahead": {
    "fileName": "src/typeahead/typeahead.ts",
    "className": "Ng2vTypeahead",
    "description": "Ng2vTypeahead directive provides a simple way of creating powerful typeaheads from any text input",
    "selector": "input[ng2vTypeahead]",
    "inputs": [
      {
        "name": "editable",
        "type": "boolean",
        "description": "A flag indicating if model values should be restricted to the ones selected from the popup only."
      },
      {
        "name": "focusFirst",
        "type": "boolean",
        "description": "A flag indicating if the first match should automatically be focused as you type."
      },
      {
        "name": "inputFormatter",
        "type": "(value: any) => string",
        "description": "A function to convert a given value into string to display in the input field"
      },
      {
        "name": "ng2vTypeahead",
        "type": "(text: Observable<string>) => Observable<any[]>",
        "description": "A function to transform the provided observable text into the array of results.  Note that the \"this\" argument\r\nis undefined so you need to explicitly bind it to a desired \"this\" target."
      },
      {
        "name": "resultFormatter",
        "type": "(value: any) => string",
        "description": "A function to format a given result before display. This function should return a formatted string without any\r\nHTML markup"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "A template to override a matching result default display"
      },
      {
        "name": "showHint",
        "type": "boolean",
        "description": "Show hint when an option in the result list matches."
      }
    ],
    "outputs": [
      {
        "name": "selectItem",
        "description": "An event emitted when a match is selected. Event payload is of type Ng2vTypeaheadSelectItemEvent."
      }
    ],
    "properties": [
      {
        "name": "activeDescendant",
        "type": "string",
        "description": ""
      },
      {
        "name": "popupId",
        "type": "string",
        "description": ""
      }
    ],
    "methods": []
  }
};

export default API_DOCS;