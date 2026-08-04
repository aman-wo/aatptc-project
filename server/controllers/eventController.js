const Event = require("../models/eventModel");

const getEvents = (req, res) => {

  Event.getAllEvents((err, results) => {

      if (err) {
            return res.status(500).json({
                    success: false,
                            message: err.message,
                                  });
                                      }


                                          res.json({
                                                success: true,
                                                      count: results.length,
                                                            data: results,
                                                                });

                                                                  });

                                                                  };


const getEvent = (req, res) => {

        const { slug } = req.params;

          Event.getEventBySlug(slug, (err, results)=>{

              if(err){
                    return res.status(500).json({
                            success:false,
                                    message:err.message
                                          });
                                              }


                                                  if(results.length === 0){

                                                        return res.status(404).json({
                                                                success:false,
                                                                        message:"Event not found"
                                                                              });

                                                                                  }


                                                                                      res.json({
                                                                                            success:true,
                                                                                                  data:results[0]
                                                                                                      });

                                                                                                        });

                                                                                                        };



const createEvent = (req,res)=>{

      Event.createEvent(req.body,(err,result)=>{


      if(err){

      return res.status(500).json({
      success:false,
      message:err.message
      });

      }


      res.status(201).json({

      success:true,
      message:"Event created successfully",
      id:result.insertId

      });


      });

      };

                                                                  module.exports = {
                                                                    getEvents, getEvent, createEvent
                                                                    };