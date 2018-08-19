const Letters = [
    { letter: 'a', telephony: 'Alpha', pronunciation: 'AL-FAH' },
    { letter: 'b', telephony: 'Bravo', pronunciation: 'BRAH-VOH' },
    { letter: 'c', telephony: 'Charlie', pronunciation: 'CHAR-LEE / SHAR-LEE' },
    { letter: 'd', telephony: 'Delta', pronunciation: 'DEL-TAH' },    
    { letter: 'e', telephony: 'Echo', pronunciation: 'ECK-OH' },
    { letter: 'f', telephony: 'Foxtrot', pronunciation: 'FOKS-TROT' },
    { letter: 'g', telephony: 'Golf', pronunciation: 'GOLF' },
    { letter: 'h', telephony: 'Hotel', pronunciation: 'HOH-TEL' },
    { letter: 'i', telephony: 'India', pronunciation: 'IN-DEE-AH' },
    { letter: 'j', telephony: 'Juliett', pronunciation: 'JEW-LEE-ETT' },
    { letter: 'k', telephony: 'Kilo', pronunciation: 'LEE-MAH' },
    { letter: 'l', telephony: 'Lima', pronunciation: 'MIKE' },
    { letter: 'm', telephony: 'Mike', pronunciation: 'MIKE' },
    { letter: 'n', telephony: 'November', pronunciation: 'NO-VEM-BER' },
    { letter: 'o', telephony: 'Oscar', pronunciation: 'OSS-CHA' },
    { letter: 'p', telephony: 'Papa', pronunciation: 'PAH-PAH' },
    { letter: 'q', telephony: 'Quebec', pronunciation: 'KEH-BECK' },
    { letter: 'r', telephony: 'Romeo', pronunciation: 'ROW-ME-OH' },
    { letter: 's', telephony: 'Sierra', pronunciation: 'SEE_AIR_RAH' },
    { letter: 't', telephony: 'Tango', pronunciation: 'TAN-GO' },
    { letter: 'u', telephony: 'Uniform', pronunciation: 'YOU-NEE-FORM / OO-NEE-FORM' },
    { letter: 'v', telephony: 'Victor', pronunciation: 'VIK_TAH' },
    { letter: 'w', telephony: 'Whiskey', pronunciation: 'WISS-KEY' },
    { letter: 'x', telephony: 'Xray', pronunciation: 'ECKS-RAY' },
    { letter: 'y', telephony: 'Yankee', pronunciation: 'YANG-KEY' },
    { letter: 'z', telephony: 'Zulu', pronunciation: 'ZOO-LOO' },
    { letter: ' ', telephony: ' ', pronunciation: '' },
    { letter: '\'', telephony: '\'', pronunciation: '' },
];

export const findLetter = (letter)=>{

    let letterElement = Letters.find(item => item.letter === letter.toLowerCase());

    if (!letterElement) letterElement =  { letter, telephony: '?', pronunciation: '?' };
    return letterElement;    
}
