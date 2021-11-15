export function getTimeDifference(fromDate, toDate, levels, prefix) {
    const lang = {
        'date.past': '{0} ago',
        'date.future': 'in {0}',
        'date.now': 'now',
        'date.year': '{0} year',
        'date.years': '{0} years',
        'date.years.prefixed': '{0} years',
        'date.month': '{0} month',
        'date.months': '{0} months',
        'date.months.prefixed': '{0} months',
    };
    const langFn = function (id, params) {
        let returnValue = lang[id] || '';
        if (params) {
            for (let i = 0; i < params.length; i++) {
                returnValue = returnValue.replace(`{${i}}`, params[i]);
            }
        }
        return returnValue;
    };
    toDate = toDate != null ? toDate : new Date();
    let diff = fromDate - toDate;
    const past = diff < 0;
    diff = diff < 0 ? diff * -1 : diff;
    const date = new Date(new Date(1970, 0, 1, 0).getTime() + diff);
    let returnString = '';
    let count = 0;
    const years = (date.getFullYear() - 1970);
    if (years > 0) {
        var langSingle = `date.year${prefix ? '' : ''}`;
            var langMultiple = `date.years${prefix ? '.prefixed' : ''}`;
        returnString += (count > 0 ? ', ' : '') + (years > 1 ? langFn(langMultiple, [years]) : langFn(langSingle, [years]));
        count++;
    }
    const months = date.getMonth();
    if (count < levels && months > 0) {
        langSingle = `date.month${prefix ? '' : ''}`;
        langMultiple = `date.months${prefix ? '.prefixed' : ''}`;
        returnString += (count > 0 ? ', ' : '') + (months > 1 ? langFn(langMultiple, [months]) : langFn(langSingle, [months]));
        count++;
    } else if (count > 0) count = 99;
    if (prefix) {
        if (returnString === '') {
            returnString = langFn('date.now');
        } else if (past) returnString = langFn('date.past', [returnString]);
        else returnString = langFn('date.future', [returnString]);
    }
    return returnString || '1+ month';
}
