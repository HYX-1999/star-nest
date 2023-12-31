import { Injectable } from '@nestjs/common'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'

@Injectable()
export class CommentService {
  create(createCommentDto: CreateCommentDto) {
    console.log('createCommentDto', createCommentDto)
    return 'This action adds a new comment'
  }

  findAll() {
    return `This action returns all comment`
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    console.log('updateCommentDto', updateCommentDto)
    return `This action updates a #${id} comment`
  }

  remove(id: number) {
    return `This action removes a #${id} comment`
  }
}
