<template>
    <div class="goals">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <button class="nav-link add-btn">Add Goal</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link dashboard-btn">Dashboard</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link logout-btn">Logout</button>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <div class="container-fluid add-goals p-0">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="left col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <h1>What's<strong>Your Goal</strong></h1>
                            <p>Pick from our featured options or create a custom goal specific for you. If you need some inspiration, check out our <strong>Communities.</strong> Get started now!</p>
                        </div>

                        <div class="right col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <h1>Get Started Now</h1>
                            <p>Start acomplishing your goals now!!</p>
                            <button @click="add()">Add Goal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid dashboard p-0">
            <div class="row">
                <div class="col-12">
                    <h1>View and edit your goals</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Goal Title</th>
                                <th>Description</th>
                                <th>Completion Date</th>
                                <th>Modify</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="goal in goals">
                                <td>{{goal.title}}</td>
                                <td>{{goal.description}}</td>
                                <td>{{goal.duration}}</td>

                                <td>
                                    <i @click="editGoal(goal)" class="fa fa-pen"></i>
                                    <i @click="deleteGoal(goal)" class="fa fa-trash"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>





































        <!--Modal -->
        <div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                                <h5 class="text-center">Add a new goal</h5>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input v-model="goal.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Description</label>
                                    <textarea v-model="goal.description" class="form-control" name="description" placeholder="Goal Description" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Goal Duration</label>
                                    <input v-model="goal.duration" class="form-control" type="date" name="duration" id="goalDuration">
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button @click="addData" class="btn btn-primary" v-if="modal == 'new'">Commit</button>
                                    <button @click="updateGoal()" class="btn btn-primary" v-if="modal == 'edit'">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {fb,db} from '../firebase'
export default {
    name: "Goals",
    props: {
        msg: String
    },
    mounted(){
        this.$nextTick(() => {
            $('.dashboard').hide();

            $('.dashboard-btn').click(function(){
                $('.add-goals').hide();
                $('.dashboard').show();
            });

            $('.add-btn').click(function(){
                $('.dashboard').hide();
                $('.add-goals').show();
            });
        });
    },
    data(){
        return {
            goals:[],
            goal:{
                title: null,
                description: null,
                duration: null
            },
            activeItem: null,
            modal: null
        }
    },
    firestore(){
        return{
            goals: db.collection("goals")
        }
    },
    methods:{
        updateGoal(){
            // this.$firestore.goals.doc(this.goal.id).update(this.goal);

            // Toast.fire({
            //     type: 'success',
            //     title: 'Updated successfully'
            // })
            // $('#add').modal('hide');
            this.$firestore.goals.doc(this.goal.id).update(this.goal);
            Toast.fire({
                type: "success",
                title: "Updated  successfully"
            });
            $("#add").modal("hide");
        },

        editGoal(goal){
            this.modal = 'edit';
            this.goal = goal;
            $('#add').modal('show');
        },
        deleteGoal(doc){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    
                    this.$firestore.goals.doc(doc.id).delete()

                    Toast.fire({
                        type: 'success',
                        title: 'Deleted successfully'
                    });
                }
            })
        },
        reset(){
            this.goal = {
                title: null,
                description: null,
                duration: null
            }
        },
        add(){
            $('#add').modal('show');
            this.modal = 'new';
            this.reset();
        },
        addData(){
            this.$firestore.goals.add(this.goal);

            Toast.fire({
                type: 'success',
                title: 'Commited goal successfully !!'
            })

            $('#add').modal('hide');
        }
    },
    created(){
        
    }
};
</script>

























<style scoped lang="scss">
@media(min-width: 768px){
    .goals{
        background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5)), url(~@/assets/white2.jpg) no-repeat center;
        background-size: cover;
        height: 100vh;
        overflow: hidden;

        nav{
            background: transparent !important;

            img{
                width: 40%;
                height: auto;
            }

            button{
                background: transparent !important;
                border: none;
                color: rgba(0,0,0,0.8);
                font-size: 1rem;
            }
        }

        .add-goals{
            .left{
                background: rgba(0,0,0,0.2);
                height: 100vh;
                width: 100%;
                padding: 17% 5%;
                -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
                clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);

                h1{
                    font-family: 'Roboto', sans-serif;
                    font-weight: lighter;
                    font-size: 4rem;
                    text-align: left;
                }

                p{
                    font-family: 'Roboto', sans-serif;
                    font-weight: lighter;
                    font-size: 1.3rem;
                    color: rgba(0,0,0,0.8);
                    text-align: left;
                }
            }

            .right{
                background: rgba(240, 248, 255, 0.664);
                height: 100vh;
                width: 100%;
                padding: 17% 0%;
                -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
                clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

                h1{
                    font-family: 'Roboto', sans-serif;
                    font-weight: lighter;
                    font-size: 4rem;
                    text-align: left;
                    position: relative;
                    left: 140px;
                }

                p{
                    font-family: 'Roboto', sans-serif;
                    font-weight: lighter;
                    font-size: 1.3rem;
                    color: rgba(0,0,0,0.8);
                    text-align: center;
                }

                button{
                    border: 1px solid rgba(0,0,0,0.2);
                    width: 20%;
                    padding: 2%;
                    background: transparent;
                    border-radius: 6px;
                    color: rgba(0,0,0,0.8);

                    &:hover{
                        color: black;
                        border: 1px solid black;
                    }
                }
            }
        }

        .dashboard{
            background: rgba(240, 248, 255, 0.664);
            height: 100vh;
            max-height: 100vh;
            width: 100%;
            padding-top: 5% !important;

            h1{
                font-family: 'Roboto', sans-serif;
                font-weight: lighter;
                font-size: 5rem;
                text-align: center;
            }

            .goal-block{
                overflow-x: scroll;

                &::-webkit-scrollbar {
                    width: 2px !important;
                }

                &::-webkit-scrollbar-track {
                    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
                }
            }

            .card{
                margin: 1%;
                padding: 2% !important;
                border-radius: 15px;
                box-shadow: 0px 0px 5px rgba(0,0,0,0.2);

                h1{
                    font-size: 2.5rem;
                }
                p{
                    font-size: 1rem;
                    text-align: left;
                }
                h6{
                    font-size: 0.8rem;
                }
                .modify{
                    .fa{
                        margin: 4%;
                        font-size: 1.2rem;
                    }
                    .fa-pen{
                        color: #4169e1;
                        cursor: pointer;
                    }
                    .fa-trash{
                        color:red;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>