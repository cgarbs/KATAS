const DNAStrand = (dna) => dna.split('').map((e) => e === "A" ? "T"
                                            : e === "T" ? "A"
                                            : e === "C" ? "G"
                                            : "C").join('');

//OR

const DNAStrand = (dna) => dna.split('').map((v) => {return {A:'T', T:'A', C:'G', G:'C'}[v]}).join('');
                                              