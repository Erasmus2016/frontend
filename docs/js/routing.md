# Routing via `react-router` and `react-router-redux`

`react-router` is the de-facto standard routing solution for react applications.
The thing is that with redux and a single state tree, the URL is part of that
state. `react-router-redux` takes care of synchronizing the location of our
application with the application state.

(See the [`react-router-redux` documentation](https://github.com/reactjs/react-router-redux)
for more information)

## Usage

Add new routes to `app/routes.js`.

This is what a standard route looks like for a container:

```JS
<Route path="play" component={GameScreen} />
```

To go to a new page use the `push` function by `react-router-redux`:

```JS
import { push } from 'react-router-redux';

dispatch(push('/some/page'));
```

## Child Routes
For example, if you have a route called `about` at `/about` and want to make a child route called `team` at `/about/our-team` you can just add that child page to the parent's body:

```JS
<Route path="/about" component={About}>
  <Route path="/about/our-team" component={OurTeam} />
</Route>
```

## Index routes

To add an index route, use the following pattern:

```JS
<IndexRoute component={LandingPage} />
```

## Dynamic routes

To go to a dynamic route such as 'post/:slug' eg 'post/cool-new-post', firstly add the route to your `routes.js`, as per documentation:

```JS
<Route path="/posts/:slug" component={Post} />
```

### Container:

```JSX
<Link to={`/posts/${post.slug}`} key={post._id}>
```

Clickable link with payload (you could use push if needed).

### Action:

```JS
export function getPost(slug) {
  return {
    type: LOAD_POST,
    slug,
  };
}

export function postLoaded(post) {
  return {
    type: LOAD_POST_SUCCESS,
    podcast,
  };
}
```

### Saga:

```JS
const { slug } = yield take(LOAD_POST);
yield call(getXhrPodcast, slug);

export function* getXhrPodcast(slug) {
  const requestURL = `http://your.api.com/api/posts/${slug}`;
  const post = yield call(request, requestURL);
  if (!post.err) {
    yield put(postLoaded(post));
  } else {
    yield put(postLoadingError(post.err));
  }
}
```

Wait (`take`) for the LOAD_POST constant, which contains the slug payload from the `getPost()` function in actions.js.

When the action is fired then dispatch the `getXhrPodcast()` function to get the response from your api. On success dispatch the `postLoaded()` action (`yield put`) which sends back the response and can be added into the reducer state.


You can read more on [`react-router`'s documentation](https://github.com/reactjs/react-router/blob/master/docs/API.md#props-3).
