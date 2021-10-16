const usage = require("./usage")
// @ponicode
describe("usage", () => {
    test("0", () => {
        let callFunction = () => {
            usage({ hiddenOptions: true, showHiddenOpt: false, $0: 350, parsed: { newAliases: { key0: "Pierre Edouard", 4: -5.48 }, argv: ["C:\\\\path\\to\\folder\\", "path/to/file.ext"] } }, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            usage({ hiddenOptions: false, showHiddenOpt: true, $0: 380, parsed: { newAliases: { key0: "Jean-Philippe", 4: 100 }, argv: "." } }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            usage({ hiddenOptions: false, showHiddenOpt: false, $0: 70, parsed: { newAliases: { key0: "Edmond", 4: -100 }, argv: ["C:\\\\path\\to\\file.ext", "C:\\\\path\\to\\folder\\"] } }, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            usage({ hiddenOptions: true, showHiddenOpt: false, $0: 50, parsed: { newAliases: { key0: "Edmond", 4: 100 }, argv: ["C:\\\\path\\to\\folder\\", "C:\\\\path\\to\\file.ext"] } }, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            usage({ hiddenOptions: false, showHiddenOpt: false, $0: 90, parsed: { newAliases: { key0: "Pierre Edouard", 4: -5.48 }, argv: ["C:\\\\path\\to\\folder\\", "path/to/folder/"] } }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            usage(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
