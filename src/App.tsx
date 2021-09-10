import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import { BackgroundImage, Header, Navigation } from './Components';
import Layout from './Components/Layout/Layout';
import { GlobalStateContext } from './Global';
import { NotfoundEvent } from './Global/NotFount';
import { AdminUI, Article, IndexPage, Top } from './pages';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    static contextType = GlobalStateContext;
    context!: React.ContextType<typeof GlobalStateContext>;
    render() {
        return (
            <Router>
                <NotfoundEvent />
                <Switch>
                    <Route path={['/admin']}></Route>
                    <Route path={'*'}>
                        <Header />
                    </Route>
                </Switch>
                {/* <Header /> */}
                <BackgroundImage />
                {this.context?.isNotfound ? (
                    <Layout layout={'notfound'} />
                ) : (
                    <Switch>
                        <Route path={['/']} exact>
                            <Layout layout={'top'}>
                                <Top />
                            </Layout>
                        </Route>
                        <Route path={['/index', '/index/:id']}>
                            <Layout layout={'index'}>
                                <IndexPage />
                            </Layout>
                        </Route>
                        <Route path={['/article/:id']}>
                            <Layout layout={'article'}>
                                <Route path={'/article/:id'} component={Article} />
                            </Layout>
                        </Route>
                        <Route path={['/admin']}>
                            {/* <Layout layout={'admin'}> */}
                            <Route path={'/admin'} component={AdminUI} />
                            {/* <DebugUI /> */}
                            {/* </Layout> */}
                        </Route>
                        <Redirect path='/article' to='/' />
                        <Route path={'*'}>
                            <Layout layout={'notfound'} />
                        </Route>
                    </Switch>
                )}
                <Navigation />
            </Router>
        );
    }
}

export default App;
