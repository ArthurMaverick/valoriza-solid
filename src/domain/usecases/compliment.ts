export namespace Compliments {
   export type Params = {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
   }
   export type Result = {
    id: string;
    user_sender: string
    user_receiver: string
    tag_id: string
    message: string
    created_at: Date
   }
}

interface Compliments {
  createCompliments: (value: Compliments.Params) => Compliments.Result
}
