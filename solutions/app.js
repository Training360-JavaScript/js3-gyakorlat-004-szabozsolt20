import checkVisa from './visa';
import checkIP from './ip';
import checkMac from './mac';

const checker = {
    rules: {
        checkVisa,
        checkIP,
        checkMac,
    },
    validate(param, what) {
        switch (what) {
            case 'visa':
                return checker.rules.checkVisa(param)
                break;
            case 'ip':
                return checker.rules.checkIP(param)
                break;
            case 'mac':
                return checker.rules.checkMac(param)
                break;
            default:
                return "Not valid parameters."
        }
    }


}

export default checker;