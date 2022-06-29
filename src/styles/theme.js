const Theme = {
  body: {
    bg: '#F5F5DC',
    color: '#704241'
  },
  text: {
    h1: '#704241',
    color1: '#888EB0',
    color2: '#7E88C3'
  },
  header: {
    bg: '#F5F5DC'
  },
  button: {
    primary: {
      bg: '#9F8170',
      color: '#FFFFFF',
      hover: {
        bg: '#704241',
        color: '#FFFFFF'
      }
    },
    secondary: {
      bg: '#F9FAFE',
      color: '#7E88C3',
      hover: {
        bg: '#9F8170',
        color: '#7E88C3'
      }
    },
    tertiary: {
      bg: '#373B53',
      color: '#888EB0',
      hover: {
        bg: '#0C0E16',
        color: '#888EB0'
      }
    },
    warning: {
      bg: '#EC5757',
      color: '#FFFFFF',
      hover: {
        bg: '#FF9797',
        color: '#FFFFFF'
      }
    }
  },
  invoiceItem: {
    bg: '#FFFFFF',
    color: '#9F8170',
    borderColor: '#FFFFFF',
    id: '#0C0E16',
    total: '#0C0E16',
    hover: {
      borderColor: '#7C5DFA'
    }
  },
  invoiceItemsList: {
    label: {
      color: '#9F8170',
      error: {
        color: '#ec5757'
      }
    },
    borderColor: '#9F8170',
    error: {
      borderColor: '#ec5757'
    },
    deleteButton: {
      color: '#888EB0',
      hover: {
        color: '#9F8170'
      }
    },
    total: '#888EB0'
  },
  status: {
    pending: '#ff8f00',
    paid: '#33D69F',
    draft: '#373B53'
  },
  filterDropdown: {
    dropdown: {
      bg: '#FFFFFF'
    }
  },
  customRadio: {
    label: {
      color: '#9F8170'
    },
    bg: '#9F8170',
    borderColor: '#9F8170',
    hover: {
      borderColor: '#FFFFFF'
    },
    checked: {
      bg: '#9F8170',
      borderColor: '#FFFFFF'
    }
  },
  invoiceDetails: {
    bg: '#FFFFFF'
  },
  invoiceTable: {
    bg: '#F9FAFE',
    heading: '#7E88C3',
    footer: {
      bg: '#373B53',
      color: '#FFFFFF'
    }
  },
  form: {
    legend: {
      color: '#704241'
    }
  },
  textField: {
    bg: '#FFFFFF',
    borderColor: '#9F8170',
    focus: {
      borderColor: '#9277ff'
    },
    error: {
      borderColor: '#EC5757'
    },
    label: {
      color: '#7e88c3',
      error: {
        color: '#EC5757'
      }
    }
  },
  drawer: {
    bg: '#FFFFFF'
  },
  deleteModal: {
    bg: '#FFFFFF',
    heading: '#0C0E16',
    body: '#888EB0'
  },
  datePicker: {
    bg: '#FFF',
    color: '#0C0E16',
    selectedBg: '#7C5DFA',
    selectedColor: '#FFF',
    daysOutOfMonth: '#EBEBEC',
    borderColor: '#9F8170',
    focus: {
      borderColor: '#9277ff'
    },
    error: {
      borderColor: '#EC5757'
    },
    label: {
      color: '#7e88c3',
      error: {
        color: '#EC5757'
      }
    }
  }
};


export { Theme};
