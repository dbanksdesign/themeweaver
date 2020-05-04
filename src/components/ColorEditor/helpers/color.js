import chroma from 'chroma-js';

export default class Color {
  constructor(input) {
		this.color = chroma(input);

    this.initRgb();
    this.initHsb();

    const initAlpha = (input && input.alpha) || this.color.alpha();
    this.alphaValue = Math.min(1, initAlpha) * 100;
  }

  static isValidHex(hex) {
    return chroma.valid(hex);
	}

  initRgb = () => {
    const [ r, g, b ] = this.color.rgb();

    this.redValue = r;
    this.greenValue = g;
    this.blueValue = b;
  };

  initHsb = () => {
		const [ h, s, l ] = this.color.hsl();
		const [ _h, _s, v ] = this.color.hsv();

		this.hueValue = isNaN(h) ? 0 : h;
		// saturation in hsl is different than hsv? weird.
		this.saturationValue = isNaN(_s) ? 0 : _s;
		this._saturationValue = isNaN(s) ? 0 : s;
		this.brightnessValue = isNaN(v) ? 0 : v;
		this.lightnessValue = isNaN(l) ? 0 : l;
  };

  toHexString = () => {
    return this.color.hex('rgb');
  };

  toRgbString = () => {
    return this.color.toRgbString();
  };

  get hex() {
    return this.color.hex('rgb');
  }

  set hue(value) {
		this.color = chroma({
			h: value,
			s: this.saturationValue,
			v: this.brightnessValue
		});

    this.initRgb();
    this.hueValue = value;
  }

  get hue() {
    return this.hueValue;
  }

  set saturation(value) {
		this.color = chroma({
			h: this.hueValue,
			s: value,
			v: this.brightnessValue
		});

    this.initRgb();
    this.saturationValue = value;
  }

  get saturation() {
    return this.saturationValue;
  }

  // 亮度
  set lightness(value) {
		this.color = chroma({
			h: this.hueValue,
			s: this._saturationValue,
			l: value
		});
		
    this.initRgb();
		this.lightnessValue = value;
		this.brightnessValue = this.color.hsv()[2];
  }

  get lightness() {
    return this.lightnessValue;
  }

  set brightness(value) {
		this.color = chroma({
			h: this.hueValue,
			s: this.saturationValue,
			v: value
		});

		this.initRgb();
		this.lightnessValue = this.color.hsl()[2];
    this.brightnessValue = value;
  }

  get brightness() {
    return this.brightnessValue;
  }

  // red
  set red(value) {
    this.color = this.color.set('rgb.r', value);

    this.initHsb();
    this.redValue = value;
  }

  get red() {
    return this.redValue;
  }

  // green
  set green(value) {
		this.color = this.color.set('rgb.g', value);

    this.initHsb();
    this.greenValue = value;
  }

  get green() {
    return this.greenValue;
  }

  // blue
  set blue(value) {
		this.color = this.color.set('rgb.b', value);

    this.initHsb();
    this.blueValue = value;
  }

  get blue() {
    return this.blueValue;
  }

  // alpha
  set alpha(value) {
    this.color = this.color.alpha(value / 100);
  }

  get alpha() {
    return this.color.alpha() * 100;
  }

  get RGB() {
    return [this.red, this.green, this.blue];
  }

  get HSB() {
    return [this.hue, this.saturation, this.brightness];
	}
	
	get HSL() {
    return [this.hue, this.saturation, this.lightness];
  }
}
