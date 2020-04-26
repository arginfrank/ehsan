import React, { Component } from 'react';
import logo from './logo.svg';
import footer from 'react';
import header from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div>
          <div className="loader"><div className="loader_html" /></div>
          <div id="wrap" className="grid_1200">
            <div className="login-panel">
              <section className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="page-content">
                      <h2>ورود</h2>
                      <div className="form-style form-style-3">
                        <form>
                          <div className="form-inputs clearfix">
                            <p className="login-text">
                              <input type="text" defaultValue="نام کاربری" onfocus="if (this.value == 'نام کاربری') {this.value = '';}" onblur="if (this.value == '') {this.value = 'نام کاربری';}" />
                              <i className="icon-user" />
                            </p>
                            <p className="login-password">
                              <input type="password" defaultValue="رمز عبور" onfocus="if (this.value == 'رمز عبور') {this.value = '';}" onblur="if (this.value == '') {this.value = 'رمز عبور';}" />
                              <i className="icon-lock" />
                              <a href="#">فراموشی</a>
                            </p>
                          </div>
                          <p className="form-submit login-submit">
                            <input type="submit" value="ورود" className="button color small login-submit submit" />
                          </p>
                          <div className="rememberme">
                            <label><input type="checkbox" defaultChecked="checked" />مرا بخاطر بسپار</label>
                          </div>
                        </form>
                      </div>
                    </div>{/* End page-content */}
                  </div>{/* End col-md-6 */}
                  <div className="col-md-6">
                    <div className="page-content Register">
                      <h2>الان ثبت نام کنید</h2>
                      <p>هنوز عضو نشدی؟<br />
                        نگرانی؟ خجالت می کشی سوال بپرسی؟ نمی دونی کی بهتر راهنمایی میکنه؟ به هیچکس اطمینان نداری؟ می خوای از متخصصش بپرسی؟ می خوای سوالاتو راحت بپرسی؟ دنبال جواب درست و فوری میگردی؟ منتظر چی هستی؟ رایگان ثبت نام کن و رایگان بپرس.</p>
                      <a className="button color small signup">ایجاد حساب کاربری</a>
                    </div>{/* End page-content */}
                  </div>{/* End col-md-6 */}
                </div>
              </section>
            </div>{/* End login-panel */}
            <div className="panel-pop" id="signup">
              <h2>ثبت نام<i className="icon-remove" /></h2>
              <div className="form-style form-style-3">
                <form>
                  <div className="form-inputs clearfix">
                    <p>
                      <label className="required">نام کاربری<span>*</span></label>
                      <input type="text" />
                    </p>
                    <p>
                      <label className="required">ایمیل<span>*</span></label>
                      <input type="email" />
                    </p>
                    <p>
                      <label className="required">رمز عبور<span>*</span></label>
                      <input type="password" defaultValue />
                    </p>
                    <p>
                      <label className="required">تکرار رمز عبور<span>*</span></label>
                      <input type="password" defaultValue />
                    </p>
                  </div>
                  <p className="form-submit">
                    <input type="submit" value="ارسال" className="button color small submit" />
                  </p>
                </form>
              </div>
            </div>{/* End signup */}
            <div className="panel-pop" id="lost-password">
              <h2>فراموشی رمز عبور<i className="icon-remove" /></h2>
              <div className="form-style form-style-3">
                <p>رمز عبور را فراموش کرده اید؟ لطفا نام کاربری و آدرس ایمیل خود را وارد کنید. سپس لینک ایجاد رمز جدید از طریق ایمیل برایتان ارسال خواهد شد.</p>
                <form>
                  <div className="form-inputs clearfix">
                    <p>
                      <label className="required">نام کاربری<span>*</span></label>
                      <input type="text" />
                    </p>
                    <p>
                      <label className="required">ایمیل<span>*</span></label>
                      <input type="email" />
                    </p>
                  </div>
                  <p className="form-submit">
                    <input type="submit" value="ارسال" className="button color small submit" />
                  </p>
                </form>
                <div className="clearfix" />
              </div>
            </div>{/* End lost-password */}
            <div id="header-top">
              <section className="container clearfix">
                <nav className="header-top-nav">
                  <ul>
                    <li><a href="contact_us.html"><i className="icon-envelope" />تماس با ما</a></li>
                    <li><a href="#"><i className="icon-headphones" />پشتیبانی</a></li>
                    <li><a href="login.html" id="login-panel"><i className="icon-user" />ورود اعضاء</a></li>
                  </ul>
                </nav>
                <div className="header-search">
                  <form>
                    <input type="text" defaultValue="جستجو ..." onfocus="if(this.value=='جستجو ...')this.value='';" onblur="if(this.value=='')this.value='جستجو ...';" />
                    <button type="submit" className="search-submit" />
                  </form>
                </div>
              </section>{/* End container */}
            </div>{/* End header-top */}
            <header id="header">
              <section className="container clearfix">
                <div className="logo"><a href="index.html"><img alt src="images/logo2.png" /></a></div>
                <nav className="navigation">
                  <ul>
                    <li className="current_page_item"><a href="index.html">خانه</a></li>
                    <li className="ask_question"><a href="ask_question.html">بپرسش</a></li>
                    <li><a href="single_question.html">سوالات</a>
                      <ul>
                        <li><a href="single_question.html">سوالات عادی</a></li>
                        <li><a href="single_question_poll.html">سوالات چند جوابی</a></li>
                      </ul>
                    </li>
                    <li><a href="user_profile.html">کاربر</a>
                      <ul>
                        <li><a href="user_profile.html">پروفایل کاربری</a></li>
                        <li><a href="user_questions.html">سوالات کاربر</a></li>
                        <li><a href="user_answers.html">پاسخ های کاربر</a></li>
                        <li><a href="user_favorite_questions.html">سوالات منتخب</a></li>
                        <li><a href="user_points.html">امتیازات کاربر</a></li>
                        <li><a href="edit_profile.html">ویرایش پروفایل</a></li>
                      </ul>
                    </li>
                    <li><a href="#">مقالات</a></li>
                    <li><a href="right_sidebar.html">صفحات</a>
                      <ul>
                        <li><a href="login.html">ورود</a></li>
                        <li><a href="contact_us.html">تماس با ما</a></li>
                        <li><a href="ask_question.html">بپرسش</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </section>{/* End container */}
            </header>{/* End header */}
            <div className="section-warp ask-me">
              <div className="container clearfix">
                <div className="box_icon box_warp box_no_border box_no_background" box_border="transparent" box_background="transparent" box_color="#FFF">
                  <div className="row">
                    <div className="col-md-3">
                      <h2>ندانستن عیب نیست، نپرسیدن عیبه!</h2><p> سیستم کاملا پیش رفته پرسش سوال همگام با نیاز های شما در راستای پاسخ به هرگونه سوال توسط بهترین اشخاص منتخب در زمینه های مختلف</p>
                      <div className="clearfix" />
                      <a className="color button dark_button medium" href="#">درباره ما</a>
                      <a className="color button dark_button medium" href="#">چرا ما</a>
                    </div>
                    <div className="col-md-9">
                      <form className="form-style form-style-2">
                        <p>
                          <textarea rows={4} id="question_title" onfocus="if(this.value=='هر سوالی داری اینجا بپرس! شک نکن پاسخ داده خواهد شد')this.value='';" onblur="if(this.value=='')this.value='هر سوالی داری اینجا بپرس! شک نکن پاسخ داده خواهد شد';" defaultValue={"هر سوالی داری اینجا بپرس! شک نکن پاسخ داده خواهد شد"} />
                          <i className="icon-pencil" />
                          <span className="color button small publish-question">بپرسش</span>
                        </p>
                      </form>
                    </div>
                  </div>{/* End row */}
                </div>{/* End box_icon */}
              </div>{/* End container */}
            </div>{/* End section-warp */}
            <section className="container main-content">
              <div className="row">
                <div className="col-md-9">
                  <div className="tabs-warp question-tab">
                    <ul className="tabs">
                      <li className="tab"><a href="#" className="current">آخرین سوالات</a></li>
                      <li className="tab"><a href="#">بیشترین پاسخ ها</a></li>
                      <li className="tab"><a href="#">اخیرا پاسخ داده شده</a></li>
                      <li className="tab"><a href="#">بی پاسخ ها</a></li>
                    </ul>
                    <div className="tab-inner-warp">
                      <div className="tab-inner">
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html"> نحوه استفاده از عینک های VR</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="علی صبوری" className="question-author-img tooltip-n"><span /><img alt src="images\alisabouri.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">با سلام. می خواستم بدونم نحوه استفاده از عینک های VR چطوریه؟ و اینکه آیا به کنسول پلی استیشن متصل میشه؟ پیشایش از پاسختون تشکر میکنم.</p>
                            <div className="question-details">
                              <span className="question-answered question-answered-done"><i className="icon-ok" />پاسخ داده شده</span>
                              <span className="question-favorite"><i className="icon-star" />5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />تکنولوژی</a></span>
                            <span className="question-date"><i className="icon-time" />4 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />5 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />23 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-poll">
                          <h2>
                            <a href="single_question_الاستطلاع.html"> کدام یکی از این گزینه ها رو زودتر میشه یاد گرفت و به نتیجه رسید؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-signal" />گزینه ای</div>
                          <div className="question-author">
                            <a href="#" original-title="امیرحسین نوری" className="question-author-img tooltip-n"><span /><img alt src="images\AmirHosseinNoori.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc"> من میخوام وارد دنیای موسیقی بشم. از اساتید محترم می خواستم راهنمایی کنن، کدوم ساز رو زودتر می تونم یاد بگیریم؟ در حدی که بتونم یک ساله به صورت حرفه ای شروع به کار کنم؟ علاقه زیاد مطرح نیست تقریبا همشونو دوست دارم</p>
                            <div className="question-details">
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />موسیقی</a></span>
                            <span className="question-date"><i className="icon-time" />19 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />3 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />62 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">چرا بنزین گران شده؟!</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="سارا نعمتی" className="question-author-img tooltip-n"><span /><img alt src="images\saranemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">واقعا دلیل گران شدن یهویی بنزین چیه؟؟‌ یکی توضیح بده</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />3.8</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />سیاسی</a></span>
                            <span className="question-date"><i className="icon-time" />2 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />57 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">این سوال چهارم است. لطفا پاسخ دهید.</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="رامین همتی" className="question-author-img tooltip-n"><span /><img alt src="images\raminhemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت. از سوال کردن خجالت نکشید. در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت.</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />2</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />اجتماعی</a></span>
                            <span className="question-date"><i className="icon-time" />4 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />2 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />116 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />9 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html"> نحوه استفاده از عینک های VR</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="علی صبوری" className="question-author-img tooltip-n"><span /><img alt src="images\alisabouri.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">با سلام. می خواستم بدونم نحوه استفاده از عینک های VR چطوریه؟ و اینکه آیا به کنسول پلی استیشن متصل میشه؟ پیشایش از پاسختون تشکر میکنم.</p>
                            <div className="question-details">
                              <span className="question-answered question-answered-done"><i className="icon-ok" />پاسخ داده شده</span>
                              <span className="question-favorite"><i className="icon-star" />5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />تکنولوژی</a></span>
                            <span className="question-date"><i className="icon-time" />4 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />5 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />23 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-poll">
                          <h2>
                            <a href="single_question_الاستطلاع.html"> کدام یکی از این گزینه ها رو زودتر میشه یاد گرفت و به نتیجه رسید؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-signal" />گزینه ای</div>
                          <div className="question-author">
                            <a href="#" original-title="امیرحسین نوری" className="question-author-img tooltip-n"><span /><img alt src="images\AmirHosseinNoori.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc"> من میخوام وارد دنیای موسیقی بشم. از اساتید محترم می خواستم راهنمایی کنن، کدوم ساز رو زودتر می تونم یاد بگیریم؟ در حدی که بتونم یک ساله به صورت حرفه ای شروع به کار کنم؟ علاقه زیاد مطرح نیست تقریبا همشونو دوست دارم</p>
                            <div className="question-details">
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />موسیقی</a></span>
                            <span className="question-date"><i className="icon-time" />19 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />3 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />62 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">چرا بنزین گران شده؟!</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="سارا نعمتی" className="question-author-img tooltip-n"><span /><img alt src="images\saranemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">واقعا دلیل گران شدن یهویی بنزین چیه؟؟‌ یکی توضیح بده</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />3.8</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />سیاسی</a></span>
                            <span className="question-date"><i className="icon-time" />2 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />57 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <a href="#" className="load-questions"><i className="icon-refresh" />بارگزاری سوالات بیشتر</a>
                      </div>
                    </div>
                    <div className="tab-inner-warp">
                      <div className="tab-inner">
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />9 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html"> نحوه استفاده از عینک های VR</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="علی صبوری" className="question-author-img tooltip-n"><span /><img alt src="images\alisabouri.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">با سلام. می خواستم بدونم نحوه استفاده از عینک های VR چطوریه؟ و اینکه آیا به کنسول پلی استیشن متصل میشه؟ پیشایش از پاسختون تشکر میکنم.</p>
                            <div className="question-details">
                              <span className="question-answered question-answered-done"><i className="icon-ok" />پاسخ داده شده</span>
                              <span className="question-favorite"><i className="icon-star" />5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />تکنولوژی</a></span>
                            <span className="question-date"><i className="icon-time" />4 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />5 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />23 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-poll">
                          <h2>
                            <a href="single_question_الاستطلاع.html"> کدام یکی از این گزینه ها رو زودتر میشه یاد گرفت و به نتیجه رسید؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-signal" />گزینه ای</div>
                          <div className="question-author">
                            <a href="#" original-title="امیرحسین نوری" className="question-author-img tooltip-n"><span /><img alt src="images\AmirHosseinNoori.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc"> من میخوام وارد دنیای موسیقی بشم. از اساتید محترم می خواستم راهنمایی کنن، کدوم ساز رو زودتر می تونم یاد بگیریم؟ در حدی که بتونم یک ساله به صورت حرفه ای شروع به کار کنم؟ علاقه زیاد مطرح نیست تقریبا همشونو دوست دارم</p>
                            <div className="question-details">
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />موسیقی</a></span>
                            <span className="question-date"><i className="icon-time" />19 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />3 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />62 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">این سوال چهارم است. لطفا پاسخ دهید.</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="رامین همتی" className="question-author-img tooltip-n"><span /><img alt src="images\raminhemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت. از سوال کردن خجالت نکشید. در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت.</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />2</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />اجتماعی</a></span>
                            <span className="question-date"><i className="icon-time" />4 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />2 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />116 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">چرا بنزین گران شده؟!</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="سارا نعمتی" className="question-author-img tooltip-n"><span /><img alt src="images\saranemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">واقعا دلیل گران شدن یهویی بنزین چیه؟؟‌ یکی توضیح بده</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />3.8</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />سیاسی</a></span>
                            <span className="question-date"><i className="icon-time" />2 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />57 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <a href="#" className="load-questions"><i className="icon-refresh" />بارگزاری سوالات بیشتر</a>
                      </div>
                    </div>
                    <div className="tab-inner-warp">
                      <div className="tab-inner">
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />9 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html"> نحوه استفاده از عینک های VR</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="علی صبوری" className="question-author-img tooltip-n"><span /><img alt src="images\alisabouri.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">با سلام. می خواستم بدونم نحوه استفاده از عینک های VR چطوریه؟ و اینکه آیا به کنسول پلی استیشن متصل میشه؟ پیشایش از پاسختون تشکر میکنم.</p>
                            <div className="question-details">
                              <span className="question-answered question-answered-done"><i className="icon-ok" />پاسخ داده شده</span>
                              <span className="question-favorite"><i className="icon-star" />5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />تکنولوژی</a></span>
                            <span className="question-date"><i className="icon-time" />4 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />5 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />23 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-poll">
                          <h2>
                            <a href="single_question_الاستطلاع.html"> کدام یکی از این گزینه ها رو زودتر میشه یاد گرفت و به نتیجه رسید؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-signal" />گزینه ای</div>
                          <div className="question-author">
                            <a href="#" original-title="امیرحسین نوری" className="question-author-img tooltip-n"><span /><img alt src="images\AmirHosseinNoori.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc"> من میخوام وارد دنیای موسیقی بشم. از اساتید محترم می خواستم راهنمایی کنن، کدوم ساز رو زودتر می تونم یاد بگیریم؟ در حدی که بتونم یک ساله به صورت حرفه ای شروع به کار کنم؟ علاقه زیاد مطرح نیست تقریبا همشونو دوست دارم</p>
                            <div className="question-details">
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />موسیقی</a></span>
                            <span className="question-date"><i className="icon-time" />19 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />3 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />62 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">این سوال چهارم است. لطفا پاسخ دهید.</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="رامین همتی" className="question-author-img tooltip-n"><span /><img alt src="images\raminhemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت. از سوال کردن خجالت نکشید. در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت.</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />2</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />اجتماعی</a></span>
                            <span className="question-date"><i className="icon-time" />4 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />2 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />116 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">چرا بنزین گران شده؟!</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="سارا نعمتی" className="question-author-img tooltip-n"><span /><img alt src="images\saranemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">واقعا دلیل گران شدن یهویی بنزین چیه؟؟‌ یکی توضیح بده</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />3.8</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />سیاسی</a></span>
                            <span className="question-date"><i className="icon-time" />2 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />57 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <a href="#" className="load-questions"><i className="icon-refresh" />بارگزاری سوالات بیشتر</a>
                      </div>
                    </div>
                    <div className="tab-inner-warp">
                      <div className="tab-inner">
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html"> نحوه استفاده از عینک های VR</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="علی صبوری" className="question-author-img tooltip-n"><span /><img alt src="images\alisabouri.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">با سلام. می خواستم بدونم نحوه استفاده از عینک های VR چطوریه؟ و اینکه آیا به کنسول پلی استیشن متصل میشه؟ پیشایش از پاسختون تشکر میکنم.</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />تکنولوژی</a></span>
                            <span className="question-date"><i className="icon-time" />4 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />23 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-poll">
                          <h2>
                            <a href="single_question_الاستطلاع.html"> کدام یکی از این گزینه ها رو زودتر میشه یاد گرفت و به نتیجه رسید؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-signal" />گزینه ای</div>
                          <div className="question-author">
                            <a href="#" original-title="امیرحسین نوری" className="question-author-img tooltip-n"><span /><img alt src="images\AmirHosseinNoori.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc"> من میخوام وارد دنیای موسیقی بشم. از اساتید محترم می خواستم راهنمایی کنن، کدوم ساز رو زودتر می تونم یاد بگیریم؟ در حدی که بتونم یک ساله به صورت حرفه ای شروع به کار کنم؟ علاقه زیاد مطرح نیست تقریبا همشونو دوست دارم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />موسیقی</a></span>
                            <span className="question-date"><i className="icon-time" />19 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />62 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">چرا بنزین گران شده؟!</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="سارا نعمتی" className="question-author-img tooltip-n"><span /><img alt src="images\saranemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">واقعا دلیل گران شدن یهویی بنزین چیه؟؟‌ یکی توضیح بده</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />3.8</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />سیاسی</a></span>
                            <span className="question-date"><i className="icon-time" />2 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />57 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">این سوال چهارم است. لطفا پاسخ دهید.</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="رامین همتی" className="question-author-img tooltip-n"><span /><img alt src="images\raminhemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت. از سوال کردن خجالت نکشید. در چند خط می توان در مورد سوال های اجتماعی سوالی نوشت و در کمترین زمان پاسخ گرفت.</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />2</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />اجتماعی</a></span>
                            <span className="question-date"><i className="icon-time" />4 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />116 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">کسی آژانس خوب برای مدلینگ و فشن سراغ داره؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="آرزو پناهی" className="question-author-img tooltip-n"><span /><img alt src="images\arezouPanahi.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">سلام. دوستان می خوام وارد صنعت مدلینگ بشم و خیلی ها بهم گفتن استعدادش رو دارم. می خوام بدونم از کجا باید شروع کنم؟ دنبال پیش رفت سریعم. کسی آدرسی چیزی از یه شرکت یا آژانس معتبر مدلینگ داره؟ در ضمن لطفا تبليغات نکنید دنبال یه جای خوب برای تست هستم</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />فشن</a></span>
                            <span className="question-date"><i className="icon-time" />7 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />178 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html"> نحوه استفاده از عینک های VR</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="علی صبوری" className="question-author-img tooltip-n"><span /><img alt src="images\alisabouri.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">با سلام. می خواستم بدونم نحوه استفاده از عینک های VR چطوریه؟ و اینکه آیا به کنسول پلی استیشن متصل میشه؟ پیشایش از پاسختون تشکر میکنم.</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />تکنولوژی</a></span>
                            <span className="question-date"><i className="icon-time" />4 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />23 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-poll">
                          <h2>
                            <a href="single_question_الاستطلاع.html"> کدام یکی از این گزینه ها رو زودتر میشه یاد گرفت و به نتیجه رسید؟</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-signal" />گزینه ای</div>
                          <div className="question-author">
                            <a href="#" original-title="امیرحسین نوری" className="question-author-img tooltip-n"><span /><img alt src="images\AmirHosseinNoori.png" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc"> من میخوام وارد دنیای موسیقی بشم. از اساتید محترم می خواستم راهنمایی کنن، کدوم ساز رو زودتر می تونم یاد بگیریم؟ در حدی که بتونم یک ساله به صورت حرفه ای شروع به کار کنم؟ علاقه زیاد مطرح نیست تقریبا همشونو دوست دارم</p>
                            <div className="question-details">
                              <span className="question-favorite"><i className="icon-star" />4.5</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />موسیقی</a></span>
                            <span className="question-date"><i className="icon-time" />19 دقیقه پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />62 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <article className="question question-type-normal">
                          <h2>
                            <a href="single_question.html">چرا بنزین گران شده؟!</a>
                          </h2>
                          <a className="question-report" href="#">گزارش</a>
                          <div className="question-type-main"><i className="icon-question-sign" />سؤال</div>
                          <div className="question-author">
                            <a href="#" original-title="سارا نعمتی" className="question-author-img tooltip-n"><span /><img alt src="images\saranemati.jpg" /></a>
                          </div>
                          <div className="question-inner">
                            <div className="clearfix" />
                            <p className="question-desc">واقعا دلیل گران شدن یهویی بنزین چیه؟؟‌ یکی توضیح بده</p>
                            <div className="question-details">
                              <span className="question-answered"><i className="icon-ok" />در انتظار پاسخ</span>
                              <span className="question-favorite"><i className="icon-star" />3.8</span>
                            </div>
                            <span className="question-category"><a href="#"><i className="icon-folder-close" />سیاسی</a></span>
                            <span className="question-date"><i className="icon-time" />2 ساعت پیش</span>
                            <span className="question-comment"><a href="#"><i className="icon-comment" />0 پاسخ</a></span>
                            <span className="question-view"><i className="icon-user" />57 مشاهده</span>
                            <div className="clearfix" />
                          </div>
                        </article>
                        <a href="#" className="load-questions"><i className="icon-refresh" />بارگزاری سوالات بیشتر</a>
                      </div>
                    </div>
                  </div>{/* End page-content */}
                </div>{/* End main */}
                <aside className="col-md-3 sidebar">			
                  <div className="widget widget_social">
                    <h3 className="widget_title">در ارتباط باشیم</h3>
                    <ul>
                      <li className="rss-subscribers">
                        <a href="#" target="_blank">
                          <strong>
                            <i className="icon-rss" />
                            <span>دریافت</span><br />
                            <small> آخرین مطالب ما</small>
                          </strong>
                        </a>
                      </li>
                      <li className="facebook-fans">
                        <a href="#" target="_blank">
                          <strong>
                            <i className="social_icon-facebook" />
                            <span>6,000</span><br />
                            <small>دنبال کننده</small>
                          </strong>
                        </a>
                      </li>
                      <li className="twitter-followers">
                        <a href="#" target="_blank">
                          <strong>
                            <i className="social_icon-twitter" />
                            <span>3,000</span><br />
                            <small>دنبال کننده</small>
                          </strong>
                        </a>
                      </li>
                      <li className="youtube-subs">
                        <a href="#" target="_blank">
                          <strong>
                            <img src="images\iconaparat.png" className="iconaparat" />
                            <span>1,000</span><br />
                            <small>دنبال کننده</small>
                          </strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_login">
                    <h3 className="widget_title">ورود</h3>
                    <div className="form-style form-style-2">
                      <form>
                        <div className="form-inputs clearfix">
                          <p className="login-text">
                            <input type="text" defaultValue="نام کاربری" onfocus="if (this.value == 'نام کاربری') {this.value = '';}" onblur="if (this.value == '') {this.value = 'نام کاربری';}" />
                            <i className="icon-user" />
                          </p>
                          <p className="login-password">
                            <input type="password" defaultValue="رمز عبور" onfocus="if (this.value == 'رمز عبور') {this.value = '';}" onblur="if (this.value == '') {this.value = 'رمز عبور';}" />
                            <i className="icon-lock" />
                            <a href="#">فراموشی</a>
                          </p>
                        </div>
                        <p className="form-submit login-submit">
                          <input type="submit" value="ورود" className="button color small login-submit submit" />
                        </p>
                        <div className="rememberme">
                          <label><input type="checkbox" defaultChecked="checked" />مرا بخاطر بسپار</label>
                        </div>
                      </form>
                      <ul className="login-links login-links-r">
                        <li><a href="#">ثبت نام</a></li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="widget widget_highest_points">
                    <h3 className="widget_title">بیشترین امتیاز</h3>
                    <ul>
                      <li>
                        <div className="author-img">
                          <a href="#"><img width={60} height={60} src="images\hessamghafari.jpg" alt /></a>
                        </div> 
                        <h6><a href="#">حسام غفاری</a></h6>
                        <span className="comment">19 امتیاز</span>
                      </li>
                      <li>
                        <div className="author-img">
                          <a href="#"><img width={60} height={60} src="images\saeidnavab.jpg" alt /></a>
                        </div> 
                        <h6><a href="#">سعید نواب</a></h6>
                        <span className="comment">16 امتیاز</span>
                      </li>
                      <li>
                        <div className="author-img">
                          <a href="#"><img width={60} height={60} src="images\setarehmahmoudinia.jpg" alt /></a>
                        </div> 
                        <h6><a href="#">ستاره محمودی نیا</a></h6>
                        <span className="comment">7 امتیاز</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h3 className="widget_title">تگ های پر کاربرد</h3>
                    <a href="#">عمومی</a>
                    <a href="#">موسیقی</a>
                    <a href="#">سیاسی</a>
                    <a href="#">اجتماعی</a>
                    <a href="#">سکسولوژی</a>
                    <a href="#">هنری</a>
                    <a href="#">مد و فشن</a>
                    <a href="#">تکنولوژی</a>
                  </div>
                </aside>{/* End sidebar */}
              </div>{/* End row */}
            </section>{/* End container */}
            <footer id="footer">
              <section className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="widget widget_contact">
                      <h3 className="widget_title">ما کی هستیم؟</h3>
                      <p>استارت آپ بپرسش جهت سهولتِ یافتن پاسخ های سوالات<br /> شما عزیزان به وجود آمده تا بتواند مرجعی برای گردهمایی<br /> مردم ایرانی جهت کمک به پاسخ سوالات یکدیگر باشد.</p>
                      <ul>
                        <li>
                          <span>آدرس :</span>
                          تهران، زعفراینه، خیابان مقدس اردبیلی، جنب پالادیوم،<br />
                          پلاک 96، طبقه یک، واحد یک
                        </li>
                        <li>
                          <span>پشتیبانی :</span>شماره تماس تیم پشتیبانی : 22011907 (21+) <br />
                          آدرس ایمیل تیم پشتیبانی : info@rosemark.co</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="widget">
                      <h3 className="widget_title">سوالات متداول</h3>
                      <ul className="related-posts">
                        <li className="related-item">
                          <h3><a href="#">آیا می توان بدون ثبت نام در سایت سوال پرسید؟</a></h3>
                          <p>خیر. برای پرسیدن سوال می بایست هویت کسی که می پرسد مشخص باشد. این کار در پاسخ سوال تاثیر زیادی دارد</p>
                        </li>
                        <li className="related-item">
                          <h3><a href="#">آیا می توان بدون ثبت نام در سایت سوال پرسید؟</a></h3>
                          <p>خیر. برای پرسیدن سوال می بایست هویت کسی که می پرسد مشخص باشد. این کار در پاسخ سوال تاثیر زیادی دارد</p>
                        </li>
                      </ul>
                    </div>	
                  </div>
                  <div className="col-md-3">
                    <div className="widget">
                      <h3 className="widget_title">&nbsp;</h3>
                      <ul className="related-posts">
                        <li className="related-item">
                          <h3><a href="#">آیا می توان بدون ثبت نام در سایت سوال پرسید؟</a></h3>
                          <p>خیر. برای پرسیدن سوال می بایست هویت کسی که می پرسد مشخص باشد. این کار در پاسخ سوال تاثیر زیادی دارد</p>
                        </li>
                        <li className="related-item">
                          <h3><a href="#">آیا می توان بدون ثبت نام در سایت سوال پرسید؟</a></h3>
                          <p>خیر. برای پرسیدن سوال می بایست هویت کسی که می پرسد مشخص باشد. این کار در پاسخ سوال تاثیر زیادی دارد</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{/* End row */}
              </section>{/* End container */}
            </footer>{/* End footer */}
            <footer id="footer-bottom">
              <section className="container">
                <img className="copyrights f_left" />تمامی حقوق متعلق به وبسایت بپرسش می باشد، کپی رایت © 2020  | <a href="http://rosemark.co">طراحی &nbsp; <img src="images\rosemarkFooterLogo.png" className="footerroselogo"></img></a></section></footer></div>
          <div className="social_icons f_right">
            <ul> &nbsp;
              <li className="twitter"><a original-title="Twitter" className="tooltip-n" href="#"><i className="social_icon-twitter font17" /></a></li>
              <li className="facebook"><a original-title="Facebook" className="tooltip-n" href="#"><i className="social_icon-facebook font17" /></a></li>
              <li className="gplus"><a original-title="Google plus" className="tooltip-n" href="#"><i className="social_icon-gplus font17" /></a></li>
              <li className="youtube"><a original-title="Youtube" className="tooltip-n" href="#"><i className="social_icon-youtube font17" /></a></li>
              <li className="rss"><a original-title="Rss" className="tooltip-n" href="#"><i className="social_icon-rss font17" /></a></li>
            </ul>
          </div>{/* End social_icons */}
          {/* End container */}
          {/* End footer-bottom */}
          {/* End wrap */}
          <div className="go-up"><i className="icon-chevron-up" /></div>
        </div>

      </div>
    );
  }
}

export default App;