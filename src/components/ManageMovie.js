import React, { Component } from 'react';
// import axios from 'axios';

class ManageMovie extends Component {
    render () {
        return (
            <div>
                <center>
                    <h1>Manage Movie</h1>
                    <table>
                        <thead>
                            
                                <tr>
                                    <th>ID</th>
                                    <th>NAMA</th>
                                    <th>TAHUN</th>
                                    <th>DESCRIPTION</th>
                                    <th>OPT</th>
                                    <th>OPT</th>
                                </tr>
                            
                        </thead>
                        <tbody>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td><input type='text' placeholder='Nama Movie'/></td>
                                <td><input type='text' placeholder='Tahun Movie'/></td>
                                <td><input type='text' placeholder='Deskripsi Movie'/></td>
                            </tr>
                        </tfoot>
                    </table>
                </center>
            </div>
        )
    }
}

export default ManageMovie;