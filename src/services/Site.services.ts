import { Model } from 'sequelize-typescript';
import { Company } from '../database/models/Company';
import { CompanyInterface } from '../interfaces/Company.interface';

export const readSiteInfo = async () => {
    try {
        const company = await Company.findOne<Model<CompanyInterface>>();
        if (company) {
            console.log('compani', company);
            return company;
        } else {
            return null;
        }
    } catch (error) {
        console.log('error', error);

        return null;
    }
};

export const storeSiteInfo = async (info: Omit<CompanyInterface, 'id'>) => {
    try {
        const company = await Company.findOne<Model<CompanyInterface>>();
        if (company) {
            await company.update(info);
            return company;
        } else {
            const newComp = await Company.create<Model<CompanyInterface>>({
                ...info,
                updatedBy: info.author,
            });
            if (newComp) {
                return newComp;
            } else throw 'no comp';
        }
    } catch (error) {
        console.log('error', error);

        return null;
    }
};
