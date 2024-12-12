import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dataTransferObjects/DataTransferObjects';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body.content);
    this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return message;
  }
}
