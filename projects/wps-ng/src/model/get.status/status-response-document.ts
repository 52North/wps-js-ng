export class StatusResponseDocument {
  private readonly _jobId: string;
  private readonly _status: string;
  private readonly _expirationDate: Date;
  private readonly _estimatedCompletion: Date;
  private readonly _nextPoll: Date;
  private readonly _percentageCompleted: number;

  constructor(statusResponseDocument: any) {
    if (statusResponseDocument != null) {
      this._jobId = statusResponseDocument.jobId;
      this._status = statusResponseDocument.status;
      this._expirationDate = statusResponseDocument.expirationDate;
      this._estimatedCompletion = statusResponseDocument.estimatedCompletion;
      this._nextPoll = statusResponseDocument.nextPoll;
      this._percentageCompleted = statusResponseDocument.percentageCompleted;
    }
  }

  get jobId(): string {
    return this._jobId;
  }

  get status(): string {
    return this._status;
  }

  get expirationDate(): Date {
    return this._expirationDate;
  }

  get estimatedCompletion(): Date {
    return this._estimatedCompletion;
  }

  get nextPoll(): Date {
    return this._nextPoll;
  }

  get percentageCompleted(): number {
    return this._percentageCompleted;
  }
}
