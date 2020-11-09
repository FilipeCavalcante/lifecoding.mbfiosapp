export interface IModelBase {
  id: string;
  createdAt: Date;
  createdBy: string;
  updatedAd: Date;
  updatedBy: string;
}

export class ModelBase implements IModelBase {
  id: string;
  createdAt: Date;
  createdBy: string;
  updatedAd: Date;
  updatedBy: string;

}
