import { Injectable } from '@nestjs/common'
import { CreateMessageDto } from './dto/create-message.dto'
import { UpdateMessageDto } from './dto/update-message.dto'

@Injectable()
export class MessageService {
  create(createMessageDto: CreateMessageDto) {
    console.log('createMessageDto', createMessageDto)
    return 'This action adds a new message'
  }

  findAll() {
    return `This action returns all message`
  }

  findOne(id: number) {
    return `This action returns a #${id} message`
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    console.log('updateMessageDto', updateMessageDto)
    return `This action updates a #${id} message`
  }

  remove(id: number) {
    return `This action removes a #${id} message`
  }
}
