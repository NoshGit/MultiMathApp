function getInputValue(elementID: string): string{
    const inputElement:HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function setStyleAttribute(element: HTMLElement, attrs: { [key: string]: any }): void {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach((key: string) => {
            element.style.setProperty(key, attrs[key]);
        });
    }
}

function logger (message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger, setStyleAttribute };