const codes = [
    'YVG87-UORJ9-J4MFS-B0EHJ',
    'YYUOT-QQEWK-5C0QA-IRAK9',
    'VHYZR-MNHZN-M8F2U-G0XOD',
    'JSN13-9E85W-2ZL86-SMWWI',
    'AOGQZ-9WZQM-ZISMK-08S2P',
    'BF20S-I4D5V-0DYH7-S3PHK',
    'BT3WT-1IR2T-YSKPS-IFNR8',
    'RVBJV-P8Q7V-UK08W-A3IOU',
    'RNIIV-2QJLG-4P4Z9-CJTL5',
    'UQ6J1-DBFCE-521O6-4MYXI'
]

export const generateCode = () =>
    codes[Math.floor(Math.random() * codes.length)]

export const validateCode = code => codes.indexOf(code) > -1

export const getCode = item => {
    if (typeof window !== 'undefined') {
        const licenseCodes =
            JSON.parse(localStorage.getItem('licenseCodes')) || {}
        licenseCodes[item] = licenseCodes[item] || generateCode()
        localStorage.setItem('licenseCodes', JSON.stringify(licenseCodes))
        return licenseCodes[item]
    }
    return ''
}
