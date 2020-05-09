class Banner {
  static BORDER_CHAR = '|';
  static CORNER_CHAR = '+';
  static ROW_CHAR = '-';
  static EMPTY_CHAR = ' ';

  constructor(message, width = null) {
    this.message = message;
    if (width) {

      width = width > process.stdout.columns ? process.stdout.columns : width;
      width = width < (message.length + 4) ? message.length + 4 : width;

      this.lineLength = width - 4;
      let rawPadding = (width - message.length - 2) / 2;
      this.paddingLeft = Math.floor(rawPadding);
      this.paddingRight = Math.ceil(rawPadding);
    } else {
      this.lineLength = message.length;
      this.paddingLeft = 1;
      this.paddingRight = this.paddingLeft;
    }
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return Banner.CORNER_CHAR + Banner.ROW_CHAR + Banner.ROW_CHAR.repeat(this.lineLength) + Banner.ROW_CHAR + Banner.CORNER_CHAR;
  }

  emptyLine() {
    return `${Banner.BORDER_CHAR} ${Banner.EMPTY_CHAR.repeat(this.lineLength)} ${Banner.BORDER_CHAR}`;
  }

  messageLine() {
    return Banner.BORDER_CHAR + Banner.EMPTY_CHAR.repeat(this.paddingLeft) + this.message + Banner.EMPTY_CHAR.repeat(this.paddingRight) + Banner.BORDER_CHAR;
  }
}

console.log(`console width: ${process.stdout.columns}`);

let banner1 = new Banner('To boldly go where no one has gone before.', 65);
banner1.displayBanner();

let banner2 = new Banner('', 0);
banner2.displayBanner();