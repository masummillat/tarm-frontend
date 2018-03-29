import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class OurMotivation extends Component {
  // static propTypes = {
  //   home: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  render() {
    return (
      <div className="home-our-motivation">
        <video autoPlay muted loop className="myVideo">
          <source src="../../images/background-video.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>

        <div className="content">
          <h1> তালুকদার অটো রাইস মিল </h1>
          <p> সময়ের  সাথে   ধানের  উৎপাদন   বাড়ার  সঙ্গে    তাল  মিলিয়ে  আমরা  আছি  আপনার  পাশে  ।   প্রথাগত   চালের  উৎপাদন  এর  ধারা  থেকে  বের  হয়ে  আমরা  এসেছি  চালের  অত্যাধুনিক  উৎপাদন  প্রক্রিয়া   নিয়ে  ।  যার  উদ্দেশ্য  চালের  গুণগত  পুষ্টি মান  বজায়  রাখা , চালের  হিউমেডিটী  বজায়  রাখা   যার  ফলে  দীর্ঘদিন  চাল  সংরক্ষণ   করা  সম্ভব ।  সেবা  এবং  গুণগত  মানের  দিক  থেকে  আমরা  নিরেট ।  কেননা  আপনার   বিশ্বাসই  আমাদের   ব্যাবসার  পুঁজি ।
              এটা  নিশ্চিত  যে  আপনি  আমাদের  কাছে  সবথেকে  ভাল  মানের  চাল  পাবেন  ।  চাল  ইন্ডাস্ট্রিতে  আমরা  আছি  গত  ৩০ টি  বছর  ধরে ।   সুতরাং  বুঝতেই  পারছেন  আমাদের  পক্ষে  ব্যাবসার   ক্ষেত্রে   আপনি   কি   ধরনের  সুযোগ  সুবিধা  পেতে  যাচ্ছেন । We are the people who will produce energy for you.  </p>

        </div>


      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OurMotivation);
