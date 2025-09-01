import connectDB from "../../../../../lib/config";
import Faq from "../../../../../models/Faq";


export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { _id, category, url, question, answer } = body;

    if (!_id) {
      return new Response(JSON.stringify({
        success: false,
        message: '_id is required to update FAQ'
      }), { status: 400 });
    }

    const updatedFaq = await Faq.findByIdAndUpdate(
      _id,
      { category, url, question, answer },
      { new: true } // return updated document
    );

    if (!updatedFaq) {
      return new Response(JSON.stringify({
        success: false,
        message: 'FAQ not found'
      }), { status: 404 });
    }

    return new Response(JSON.stringify({
      success: true,
      faq: updatedFaq
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 500 });
  }
}
