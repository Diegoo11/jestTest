const mayus = require('./test/capitalize')
const reves = require('./test/reves')
const ope = require('./test/calculator')
const cesar = require('./test/cesar')
const analyzeArray = require('./test/analyzeArray')

test('mayuscula',()=>{
    expect(mayus('hola')).toBe('Hola');
})

test('mayuscula2',()=>{
    expect(mayus('como estas')).toBe('Como estas')
})

test('alreves',()=>{
    expect(reves('diegoo')).toBe('oogeid')
})

test('alreves2',()=>{
    expect(reves('hola diegoo como estas')).toBe('satse omoc oogeid aloh')
})

test('suma',()=>{
    expect(ope.sum(2,5)).toBe(7)
})

test('less',()=>{
    expect(ope.less(5,4)).toBe(1)
})

test('multipli',()=>{
    expect(ope.mult(2,5)).toBe(10)
})

test('divide',()=>{
    expect(ope.div(20,5)).toBe(4)
})

test('cesar 1 palabra',()=>{
    expect(cesar('hola',3)).toBe('krod')
})

test('cesar 2 palabras',()=>{
    expect(cesar('como estas, diegoo',10)).toBe('mywy ocdkc, nsoqyy')
})

test('cesar 3 palabras',()=>{
    expect(cesar('hola mundo como estan',83)).toBe('mtqf rzsit htrt jxyfs')
})

test('matriz a objetos',()=>{
    expect(analyzeArray(2,3,4,5,6,10)).toEqual({
        "average": 5,
        "min": 2,
        "max": 10,
        "length": 6
    })
})