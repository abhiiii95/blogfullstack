import connectDB from "../../../../lib/config";
import Faq from "../../../../models/Faq";

export async function POST(request) {
    try {
      await connectDB();
      const { category, url, question, answer } = await request.json();
  
      const newFaq = await Faq.create({
        category,
        url,
        question,
        answer
      });
  
      return new Response(JSON.stringify({ success: true, faq: newFaq }), {
        status: 201
      });
  
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500
      });
    }
  }


export async function GET(request) {
    try {
      await connectDB();
      const { searchParams } = new URL(request.url);
      console.log(searchParams,"searchParams")
      const category = searchParams.get('category');
      const url = searchParams.get('url');
      let query = {};
      if (category) query.category = category;
      if (url) query.url = url;
  
      const faqs = await Faq.find(query);
  
    //   const faqs = await Faq.find({ category, url });
  
      return new Response(JSON.stringify({
        success: true,
        faqs
      }), { status: 200 });
  
    } catch (error) {
      return new Response(JSON.stringify({
        success: false,
        error: error.message
      }), { status: 500 });
    }
  }