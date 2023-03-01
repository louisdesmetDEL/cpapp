
const cds = require('@sap/cds')

/**
 * Implementation for Risk Management service defined in ./risk-service.cds
 */
module.exports = cds.service.impl(async function() {
    this.after('READ', 'Risks', risksData => {
        const risks = Array.isArray(risksData) ? risksData : [risksData];
        risks.forEach(risk => {
            if (risk.impact >= 100000) {
                risk.criticality = 1;
            } else if (risk.impact >= 50000) {
                risk.criticality = 2;
            }
            else if (risk.impact >= 10000) {
                risk.criticality = 3;
            }
            else {
                risk.criticality = 4;
            }
        });

    });

});