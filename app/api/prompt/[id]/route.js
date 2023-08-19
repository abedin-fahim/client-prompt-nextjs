import connectToDB from '@utils/database';
import Prompt from '@models/prompt';

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');
    if (!prompt) {
      return new Response('Prompt not found!', { status: 404 });
    }

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch the prompts', {
      status: 500,
    });
  }
};

// PATCH
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response('Prompt not found', {
        status: 404,
      });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response(`Something went wrong: ${error}`, {
      status: 400,
    });
  }
};

// DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    // Check if findByIdAndRemove() return anything otherwise just don't store it and don't check it conditionally
    const prompt = await Prompt.findByIdAndRemove(params.id);
    if (!prompt) {
      return new Response("Couldn't find the prompt to delete", {
        status: 500,
      });
    }
    return new Response('Prompt successfully deleted', {
      status: 200,
    });
  } catch (error) {
    return new Response(error, {
      status: 400,
    });
  }
};
