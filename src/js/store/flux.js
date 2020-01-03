const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: (a, b, c, d) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: a,
						email: b,
						phone: c,
						address: d,
						agenda_slug: "ivetted"
					})
				});

				console.log("clicked", a, b, c, d);
			}
		}
	};
};

export default getState;
