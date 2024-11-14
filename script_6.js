const arn_translation_table = [
    ["Sérine", ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]],
    ["Proline", ["CCU", "CCC", "CCA", "CCG"]],
    ["Leucine", ["UUA", "UUG"]],
    ["Phénylanine", ["UUU", "UUC"]],
    ["Arginine", ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"]],
    ["Tyrosine", ["UAU", "UAC"]]
];

const ARN = "CCUCGCCGGUACUUCUCG"

const groups = ARN.match(/.{1,3}/g)

res = ""


for(let group of groups){
    for(let element of arn_translation_table){
        if(element[1].find((element) => group == element)){
            res += element[0]
            if (groups.at(-1).localeCompare(group) !== 0){
                res += "-"
            }
            
        }
        
    }
    
}
console.log(res)