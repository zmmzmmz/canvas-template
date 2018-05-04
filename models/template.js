import mongoose, {Schema} from 'mongoose'

const TemplateSchema = new Schema({
  name: {type: String},
  group: {type: String},
  created_at: {type: Date, default: Date.now}
})

mongoose.model('Template', TemplateSchema)
