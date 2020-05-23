export default ({action, graph, triples}) => !triples || triples.length === 0 ? '' : `${action} DATA { GRAPH {${graph}}
{${triples.reduce((total, [s, p, o]) => total + ` ${s} ${p} ${o.includes('://') ? o : o.replace('<', "'").replace('>', "'")} .`,'')}}} `