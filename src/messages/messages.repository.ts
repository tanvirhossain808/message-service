import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

/* import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content);
    return messages;
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const newId = Math.round(Math.random() * 100000);
    console.log(newId, 'newid');
    messages[newId] = { id: newId, content };
    await writeFile('messages.json', JSON.stringify(messages));
    return newId;
  }
}
/* import { readFile, writeFile } from 'fs/promises';


/*  */
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content);
    return messages;
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const newId = Math.round(Math.random() * 100000);
    console.log(newId, 'newid');
    messages[newId] = { id: newId, content };
    await writeFile('messages.json', JSON.stringify(messages));
    return newId;
  }
}
