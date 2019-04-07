export class Auto {
    private _make: string;
    private _model: string;
    private _classification: string;
    private _year: string;
    private _transmission: string;
    private _fuelType: string;
    private _color: string;
    private _length: number;
    private _width: number;
    private _height: number;
    private _trunkSize: number;

    /**
     * Getter make
     * @return {string}
     */
    public get make(): string {
        return this._make;
    }

    /**
     * Getter model
     * @return {string}
     */
    public get model(): string {
        return this._model;
    }

    /**
     * Getter classification
     * @return {string}
     */
    public get classification(): string {
        return this._classification;
    }

    /**
     * Getter year
     * @return {string}
     */
    public get year(): string {
        return this._year;
    }

    /**
     * Getter transmission
     * @return {string}
     */
    public get transmission(): string {
        return this._transmission;
    }

    /**
     * Getter fuelType
     * @return {string}
     */
    public get fuelType(): string {
        return this._fuelType;
    }

    /**
     * Getter color
     * @return {string}
     */
    public get color(): string {
        return this._color;
    }

    /**
     * Getter length
     * @return {number}
     */
    public get length(): number {
        return this._length;
    }

    /**
     * Getter width
     * @return {number}
     */
    public get width(): number {
        return this._width;
    }

    /**
     * Getter height
     * @return {number}
     */
    public get height(): number {
        return this._height;
    }

    /**
     * Getter trunkSize
     * @return {number}
     */
    public get trunkSize(): number {
        return this._trunkSize;
    }

    /**
     * Setter make
     * @param {string} value
     */
    public set make(value: string) {
        this._make = value;
    }

    /**
     * Setter model
     * @param {string} value
     */
    public set model(value: string) {
        this._model = value;
    }

    /**
     * Setter classification
     * @param {string} value
     */
    public set classification(value: string) {
        this._classification = value;
    }

    /**
     * Setter year
     * @param {string} value
     */
    public set year(value: string) {
        this._year = value;
    }

    /**
     * Setter transmission
     * @param {string} value
     */
    public set transmission(value: string) {
        this._transmission = value;
    }

    /**
     * Setter fuelType
     * @param {string} value
     */
    public set fuelType(value: string) {
        this._fuelType = value;
    }

    /**
     * Setter color
     * @param {string} value
     */
    public set color(value: string) {
        this._color = value;
    }

    /**
     * Setter length
     * @param {number} value
     */
    public set length(value: number) {
        this._length = value;
    }

    /**
     * Setter width
     * @param {number} value
     */
    public set width(value: number) {
        this._width = value;
    }

    /**
     * Setter height
     * @param {number} value
     */
    public set height(value: number) {
        this._height = value;
    }

    /**
     * Setter trunkSize
     * @param {number} value
     */
    public set trunkSize(value: number) {
        this._trunkSize = value;
    }
}
