import connectDB from "../../../../../lib/config";
import Faq from "../../../../../models/Faq";


export async function DELETE(request) {
  try {
    await connectDB();

    const { _id } = await request.json();

    if (!_id) {
      return new Response(JSON.stringify({
        success: false,
        message: '_id is required to delete FAQ'
      }), { status: 400 });
    }

    const deletedFaq = await Faq.findByIdAndDelete(_id);

    if (!deletedFaq) {
      return new Response(JSON.stringify({
        success: false,
        message: 'FAQ not found'
      }), { status: 404 });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'FAQ deleted successfully',
      faq: deletedFaq
    }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 500 });
  }
}
  