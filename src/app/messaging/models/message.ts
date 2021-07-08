export interface Message {
  id?: Number,
  from?: String,
  to?: String,
  subject?: String,
  body?: String,
  sendDate?: Date,
  receiveDate?: Date,
  read?: Boolean
}
