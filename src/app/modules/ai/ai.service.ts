import OpenAI from 'openai';
import envVars from '../../config/env';
const openai = new OpenAI({ apiKey: envVars.OPENAI_API_KEY });

const createChat = async (payload: string) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: payload }],
  });
  // console.log(response.choices[0].message.content);
  const message = response.choices[0].message.content;
  return message;
};

export const AIServices = {
  createChat,
};
